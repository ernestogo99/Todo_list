import type React from "react";
import { Container, CustonButton, TodoInput, TodoList } from "../../../shared/components";

import type { ItodoItem } from "../../../shared/interfaces/todoitem";
import { useEffect, useMemo, useState } from "react";
import styles from "./style.module.css";
import { DeleteMessage } from "../../../shared/components/deleteMessage/deleteMessage";
import { useNavigate } from "react-router-dom";
import { TodoService } from "../../../shared/services/todoservice";
import toast from "react-hot-toast";
import { authService } from "../../../shared/services/authservice";

const DesktopTodo: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const [todos, setTodos] = useState<ItodoItem[]>([]);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<ItodoItem | null>(null);
  const [description, setDescription] = useState('');


  useEffect(() => {
    TodoService.getAllTodosByUser().then((response) => {
      if (response instanceof Error) {
        toast.error(response.message);
      } else {
        setTodos(response);
      }
    });
  }, []);

  const filteredItems = useMemo(() => {
    return todos.filter((item) =>
      item.descricao.toLowerCase().includes(search.toLowerCase())
    );
  }, [todos, search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleDone = (todoItem: ItodoItem) => {
    const updatedTodo = { ...todoItem, done: !todoItem.done };

    TodoService.editTodo(updatedTodo.id!, updatedTodo)
      .then(response => {
        if (response instanceof Error) {
          toast.error("Erro ao atualizar tarefa.");
          return;
        }

        setTodos(prevTodos =>
          prevTodos.map(item =>
            item.id === updatedTodo.id ? updatedTodo : item
          )
        );
      })
      .catch(() => {
        toast.error("Erro ao atualizar tarefa.");
      });
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!description.trim()) {
      toast.error("Descrição não pode estar vazia");
      return;
    }

  
    const newTodo: ItodoItem = {
      descricao: description,
      done: false,
    };

    TodoService.createTodo(newTodo)
      .then(result => {
        if (result instanceof Error) {
          toast.error(result.message);
        } else {
          setTodos(prev => [...prev, result]);
          setDescription('');
          toast.success("Tarefa criada com sucesso!");
        }
      })
      .catch(() => {
        toast.error("Erro ao criar a tarefa");
      })
     
  };

  const logOut = () => {
  authService.logout(); 
}

  const handleOpenDeleteModal = (todo: ItodoItem) => {
    setSelectedTodo(todo);
    setShowDeleteMessage(true);
  };


  const handleCloseDeleteModal = () => {
    setSelectedTodo(null);
    setShowDeleteMessage(false);
  };


  const handleEdit = (todoItem: ItodoItem) => {
  navigate(`/todolist/editar/${todoItem.id}`);
    };


  const handleDelete = () => {
    if (!selectedTodo) return;

    TodoService.deleteTodo(selectedTodo.id!)
      .then(response => {
        if (response instanceof Error) {
          toast.error(response.message);
        } else {
          setTodos(prev => prev.filter(todo => todo.id !== selectedTodo.id));
          toast.success("Tarefa excluída com sucesso!");
        }
        handleCloseDeleteModal();
      })
      .catch(() => {
        toast.error("Erro ao excluir tarefa.");
        handleCloseDeleteModal();
      });
  };

  return (
    <>
      <Container>
        <div className={styles.box}>
          <TodoInput
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            description={description}
          />
          <TodoList
            search={search}
            setSearch={setSearch}
            items={filteredItems}
            handleOpenModal={handleOpenDeleteModal}  
            handleEdit={handleEdit}
            handleDone={handleDone}
          />
          <div className={styles.buttonBox}>
            <CustonButton onClick={logOut} type="button">
              Sair
            </CustonButton>
          </div>
        </div>
      </Container>

      <DeleteMessage
        showDeletemessage={showDeleteMessage}
        handleDelete={handleDelete}
        onClose={handleCloseDeleteModal}
      />
    </>
  );
};

export default DesktopTodo;
