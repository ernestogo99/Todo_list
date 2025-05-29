import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LucideFileText } from "lucide-react";
import styles from "./styles.module.css";

import toast from "react-hot-toast";

import { TodoService } from "../../shared/services/todoservice";
import { Container, CustonButton } from "../../shared/components";
import type { ItodoItem } from "../../shared/interfaces/todoitem";

const EditTodoPage: React.FC = () => {
  const [todo, setTodo] = useState<ItodoItem | null>(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    TodoService.getTodoById(Number(id))
      .then((response) => {
        if (response instanceof Error) {
          toast.error(response.message);
        } else {
          setTodo(response);
          setValue(response.descricao);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value.trim()) {
      toast.error("A descrição da tarefa não pode estar vazia.");
      return;
    }

    if (!todo) return;
    const updatedTodo = { ...todo, descricao: value };

    setLoading(true);
    TodoService.editTodo(todo.id!,updatedTodo)
      .then((response) => {
        if (response instanceof Error) {
          toast.error(response.message);
        } else {
          toast.success("Tarefa atualizada com sucesso!");
          setTimeout(() => {
            navigate("/todolist");
          }, 1500);
        }
      })
      .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    navigate("/todolist");
  };

  if (loading) return <p>Carregando...</p>;
  if (!todo) return <p>Tarefa não encontrada.</p>;

  return (
    <Container><div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <div className={styles.inputGroupPrepend}>
            <LucideFileText size={18} />
          </div>
          <input
            type="text"
            className={styles.input}
            placeholder="Editar tarefa"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className={styles.buttonGroup}>
          <CustonButton type="submit" >
            {loading ? "Salvando..." : "Salvar"}
          </CustonButton>
          <CustonButton type="button" onClick={handleCancel} >
            Cancelar
          </CustonButton>
        </div>
      </form>
    </div></Container>
    
  );
};

export default EditTodoPage;
