import { TodoItem } from './../components/todoComponents/todoItem';
import { useState, useEffect, useMemo, useCallback } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import type { ItodoItem } from "../interfaces/todoitem";
import { authService } from "../services/authservice";
import  { TodoService } from "../services/todoservice";

export const useTodoLogic=()=>{
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const [todos, setTodos] = useState<ItodoItem[]>([]);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const[showDeleteAllMessage,setShowDeletAllMessage]=useState(false)
  const [selectedTodo, setSelectedTodo] = useState<ItodoItem | null>(null);
  const [description, setDescription] = useState('');
  const [showDialog,setShowDialog]=useState(false)


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

  const handleOpenDeleteAllModal=()=>[
    setShowDeletAllMessage(true)
  ]

  const handleCloseDeleteAllModal=()=>{
    setShowDeletAllMessage(false)
  }
  const handleCloseDeleteModal = () => {
    setSelectedTodo(null);
    setShowDeleteMessage(false);
  };


  const handleEdit = (todoItem: ItodoItem) => {
  navigate(`/todolist/editar/${todoItem.id}`);
    };

   const openItemDialog=(todoItem:ItodoItem)=>{
        setSelectedTodo(todoItem)
        setShowDialog(true)
   }
   
   const closeItemDialog=()=>{
    setSelectedTodo(null)
    setShowDialog(false)
   }


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



  const handleDeleteDoneTodos=useCallback(()=>{
      TodoService.deleteDoneTodos().then((response)=>{
        if(response instanceof Error ){
          toast.error(response.message)
        }else{
          setTodos(prev=>prev.filter((todo)=>!todo.done))
          toast.success("Tarefas removidas com sucesso")
        }
        handleCloseDeleteAllModal()
      })
  },[])


  return{
    todos,
    description,
    search,
    filteredItems,
    showDeleteMessage,
    showDeleteAllMessage,
    selectedTodo,
    setSearch,
    setShowDeleteMessage,
    setShowDeletAllMessage,
    setSelectedTodo,
    handleSubmit,
    handleChange,
    handleDone,
    handleEdit,
    handleDelete,
    handleDeleteDoneTodos,
    logOut,
    handleOpenDeleteAllModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleCloseDeleteAllModal,
    closeItemDialog,
    openItemDialog,
    showDialog
    
  }

}