import { LucideFileText } from "lucide-react";
import styles from "./style.module.css";
import { CustonButton } from "../customButton/custonbutton";
import type { ItodoItem } from "../../interfaces/todoitem";
import { useState } from "react";

interface TodoEditInputProps {
  item: ItodoItem;
  onEdit: (updatedItem: ItodoItem) => void;
  onCancel: () => void;
}

export const TodoEditInput: React.FC<TodoEditInputProps> = ({
  item,
  onEdit,
  onCancel,
}) => {
  const [value, setValue] = useState(item.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEdit({ ...item, description: value }); 
  };

  return (
    <div className={styles.card}>
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
          />
        </div>
        <div className={styles.buttonGroup}>
          <CustonButton type="submit">Salvar</CustonButton>
          <CustonButton type="button" onClick={onCancel}>Cancelar</CustonButton>
        </div>
      </form>
    </div>
  );
};

