import type { ItodoItem } from "../interfaces/todoitem";
import { api } from "./apiconfig/axiosconfig";


const getAllTodosByUser=async ():Promise<ItodoItem[]|Error>=>{
    try{
        const {data}= await api.get("todo/user_todos/")
        if(data){
            return data
        }
        return new Error("Erro ao obter as todos")
     } catch (error: any) {
    console.error(error);

    const errorMessage =
      error.response?.data?.error || "Erro ao obter as  todos";
    return new Error(errorMessage);
  }
}


const getAllTodos=async ():Promise<ItodoItem[]|Error>=>{
    try{
        const {data}= await api.get("todo/")
        if(data){
            return data
        }
        return new Error("Erro ao obter as todos")
     } catch (error: any) {
    console.error(error);

    const errorMessage =
      error.response?.data?.error || "Erro ao obter as  todos";
    return new Error(errorMessage);
  }
}


const createTodo=async(todo:Omit<ItodoItem,'id'>):Promise<ItodoItem | Error>=>{
    try{
        const {data}=await api.post("todo/",todo)
        if(data){
            return data
        }
        return new Error("erro ao criar a todo")
    }catch (error: any) {
    console.error(error);

    const errorMessage =
      error.response?.data?.error || "Erro ao criar a todo";
    return new Error(errorMessage);
  }
}




const deleteTodo=async(id:number):Promise<any>=>{
    try{
        const {data}=await api.delete(`todo/${id}`)
        return data
    }catch (error: any) {
    console.error(error);
    const errorMessage =
      error.response?.data?.error || "Erro ao excluir a todo";
    return new Error(errorMessage);
  }
}


const getTodoById=async(id:number):Promise<ItodoItem | Error>=>{
    try{
        const {data}=await api.get(`todo/${id}`)
        if(data){
            return data
        }
        return new Error("Erro ao obter a todo")
    }catch (error: any) {
    console.error(error);
    const errorMessage =
      error.response?.data?.error || "Erro ao obter a  todo";
    return new Error(errorMessage);
  }
}


const editTodo=async(id:number,todo:ItodoItem):Promise<ItodoItem|Error>=>{
    try{
        const {data}=await api.put(`/todo/${id}`,todo)
        return data
    }
    catch (error: any) {
    console.error(error);
    const errorMessage =
      error.response?.data?.error || "Erro ao atualizar a todo";
    return new Error(errorMessage);
  }
}


export const TodoService={
    editTodo,
    getTodoById,
    getAllTodosByUser,
    createTodo,
    deleteTodo,
    getAllTodos
}