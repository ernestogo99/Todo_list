from ninja import Router
from .models import Tarefa
from .schema import TaskSchema, TaskCreateSchema, TaskUpdateSchema,TaskFinishSchema
from typing import List
from django.shortcuts import get_object_or_404
from login.auth import JWTAuth
from django.contrib.auth.models import AnonymousUser
from datetime import datetime

router = Router(tags=['Todos'])

auth=JWTAuth()


@router.get("/", response=List[TaskSchema])
def listar_tarefas(request):
    """Rota para listar todas as tarefas"""
    return Tarefa.objects.all()

@router.post("/", response={200:TaskSchema,401:dict},auth=auth)
def criar_tarefa(request, data: TaskCreateSchema,):
    """Rota para criar uma tarefa"""
    user=request.auth
    if not user or isinstance(user, AnonymousUser):
        return 401, {'status': 401, 'error': 'Usuário não autenticado'}
    tarefa = Tarefa.objects.create(**data.dict(),user=user)
    return tarefa

@router.put('/finish_todo/{id}',response={200:TaskFinishSchema,401:dict},auth=auth)
def finish_todo(request,id,finished_todo:TaskFinishSchema):
    user = request.auth
    if not user or isinstance(user, AnonymousUser):
        return 401, {'status': 401, 'error': 'Usuário não autenticado'}
    

   

    todo=get_object_or_404(Tarefa,id=id,user=user)
    todo.done=finished_todo.done
    if(finished_todo.done):
        todo.finished=datetime.now().date()
    else:
        todo.finished=None
    todo.save()
        

    return todo

@router.get("/{id_tarefa}", response={200:TaskSchema,401:dict},auth=auth)
def ver_tarefa(request, id_tarefa: int):
    """Rota para obter uma tarefa por id"""
    user=request.auth
    if not user or isinstance(user, AnonymousUser):
        return 401, {'status': 401, 'error': 'Usuário não autenticado'}
    tarefa = get_object_or_404(Tarefa, id= id_tarefa,user=user)
    return tarefa

@router.put("/{id_tarefa}", response={200:TaskSchema,401:dict},auth=auth)
def editar_tarefa(request, id_tarefa: int, data: TaskUpdateSchema):
    """Rota para editar uma tarefa"""
    user=request.auth
    if not user or isinstance(user, AnonymousUser):
        return 401, {'status': 401, 'error': 'Usuário não autenticado'}
    Tarefa.objects.filter(id=id_tarefa,user=user).update(**data.dict())
    tarefa = get_object_or_404(Tarefa, id=id_tarefa,user=user)
    tarefa.save()
    return tarefa

@router.delete("/{id_tarefa}",response={204:None,401:dict},auth=auth)
def deletar_tarefa(request, id_tarefa: int):
    """Rota para excluir uma tarefa"""

    user=request.auth
    if not user or isinstance(user, AnonymousUser):
        return 401, {'status': 401, 'error': 'Usuário não autenticado'}
    tarefa = get_object_or_404(Tarefa, id = id_tarefa,user=user)
    tarefa.delete()
    return 204,None


@router.get('/user_todos/', response={200: List[TaskSchema], 401: dict}, auth=auth)
def obter_todos_por_usuario(request):
    """Rota para obter as todos do usuário"""

    user = request.auth
    if not user or isinstance(user, AnonymousUser):
        return 401, {'status': 401, 'error': 'Usuário não autenticado'}
    
    todos = Tarefa.objects.filter(user=user).select_related('user')
    return todos



@router.delete('/delete_done_todos/',response={204:None,401:dict},auth=auth)
def delete_done_todos(request):
    """Rota para excluir todas as todos concluídas"""

    user = request.auth
    if not user or isinstance(user, AnonymousUser):
        return 401, {'status': 401, 'error': 'Usuário não autenticado'}
    
    done_todos=Tarefa.objects.filter(done=True,user=user)
    done_todos.delete()
    return 204,None



