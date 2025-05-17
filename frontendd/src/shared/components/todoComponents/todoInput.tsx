import { LucideFileText } from "lucide-react";
import styles from "./style.module.css";
import { CustonButton } from "../customButton/custonbutton";

interface TodoInputProps {
  description: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;

}

export const TodoInput: React.FC<TodoInputProps> = ({
  description,
  handleChange,
  handleSubmit,
 
}) => {
  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <div className={styles.inputGroupPrepend}>
            <div>
              <LucideFileText  size={18} />
            </div>
          </div>
          <input
            type="text"
            className={styles.input}
            placeholder="New Todo"
            value={description}
            onChange={handleChange}
          />
        </div>
        <CustonButton text="Add new todo" type="submit"></CustonButton>
      </form>
    </div>
  );
};
