import type React from "react";
import { Container, RedButton, TodoInput,ItemDialog, TodoList } from "../../../shared/components";
import styles from "./style.module.css";
import { DeleteMessage } from "../../../shared/components/deleteMessage/deleteMessage";
import { useTodoLogic } from "../../../shared/hooks/useTodoLogic";

const MobileTodo: React.FC = () => {
   const {handleChange,handleSubmit,description,search,setSearch,filteredItems,handleOpenDeleteModal
    ,handleEdit,handleDone,logOut,handleOpenDeleteAllModal,showDeleteMessage,showDeleteAllMessage,
    handleDelete,handleDeleteDoneTodos,handleCloseDeleteAllModal,handleCloseDeleteModal,showDialog,
    openItemDialog,closeItemDialog,selectedTodo
   }=useTodoLogic()

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
          handleSeeItem={openItemDialog}
            search={search}
            setSearch={setSearch}
            items={filteredItems}
            handleOpenModal={handleOpenDeleteModal}  
            handleEdit={handleEdit}
            handleDone={handleDone}
          />
          <div className={styles.buttonBox}>
            <RedButton onClick={logOut} type="button">
              Logout
            </RedButton>
            <RedButton onClick={handleOpenDeleteAllModal} type="button">
              Delete Done Tasks
            </RedButton>
          </div>
        </div>
      </Container>

      <DeleteMessage
        showDeletemessage={showDeleteMessage}
        handleDelete={handleDelete}
        onClose={handleCloseDeleteModal}
      />

      <DeleteMessage
        showDeletemessage={showDeleteAllMessage}
        handleDelete={handleDeleteDoneTodos}
        onClose={handleCloseDeleteAllModal}
      />

      <ItemDialog
            Item={selectedTodo!}     
            showDialog={showDialog}
            Onclose={closeItemDialog} 
            >
      
            </ItemDialog>
    </>
  );
};

export default MobileTodo;
