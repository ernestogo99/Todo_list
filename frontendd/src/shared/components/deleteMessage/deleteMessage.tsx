import type React from "react";
import styles from "./style.module.css"

interface IDeleteMessage {
  handleDelete: () => void;
  onClose: () => void;
  showDeletemessage:boolean
}

export const DeleteMessage: React.FC<IDeleteMessage> = ({ handleDelete, onClose,showDeletemessage }) => {
  return (
    <>
        {showDeletemessage && (
        <div className={styles.container}>
            <div className={styles.confirmBox}>
            <h2 className={styles.title}>Tem certeza que deseja excluir este item?</h2>
            <div className={styles.buttonGroup}>
                <button onClick={handleDelete} className={styles.deleteButton}>Excluir</button>
                <button onClick={onClose} className={styles.cancelButton}>Cancelar</button>
            </div>
            </div>
        </div>
        )}
    </>
   
  );
};
