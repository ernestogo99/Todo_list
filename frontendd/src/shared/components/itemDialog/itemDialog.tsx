import { X } from "lucide-react";
import type { ItodoItem } from "../../interfaces/todoitem";
import styles from "./style.module.css"
import { format } from 'date-fns';
interface IitemDialog {
  Item: ItodoItem;
  showDialog: boolean;
  Onclose: () => void;
}

export const ItemDialog: React.FC<IitemDialog> = ({ Item, showDialog, Onclose }) => {
  console.log("ItemDialog renderizou com:", Item);
  if (!showDialog) return null;

  return (
    <div  className={styles.overlay}>
      <div className={styles.dialog}>
        <button onClick={Onclose} className={styles.closeButton}>
          <X size={20} />
        </button>

       <p><strong>Data de criação:</strong> {Item.create ? format(new Date(Item.create), "dd/MM/yyyy") : "Não informada"}</p>
        <p><strong>Descrição:</strong> {Item.descricao}</p>
        <p><strong>Status:</strong> {Item.done ? "Concluído" : "Pendente"}</p>
        {Item.finished && (
        <p><strong>Data de conclusão:</strong> {format(new Date(Item.finished), "dd/MM/yyyy")}</p>
        )}
      </div>
    </div>
  );
};
