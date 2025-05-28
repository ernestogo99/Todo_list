from ninja import Router, NinjaAPI
from TODO.models import Tarefa
from .schema import TaskSchema, TaskCreateSchema, TaskUpdateSchema
from typing import List
from django.shortcuts import get_object_or_404
router = Router()

@router.get("/", response=List[TaskSchema])
def listar_tarefas(request):
    return Tarefa.objects.all()
@router.post("/", response=TaskSchema)
def criar_tarefa(request, data: TaskCreateSchema):
    tarefa = Tarefa.objects.create(**data.dict())
    return tarefa
@router.get("/{id_tarefa}", response=TaskSchema)
def ver_tarefa(request, id_tarefa: int):
    tarefa = get_object_or_404(Tarefa, id= id_tarefa)
    return tarefa
@router.put("/{id_tarefa}", response=TaskSchema)
def editar_tarefa(request, id_tarefa: int, data: TaskUpdateSchema):
    tarefa = get_object_or_404(Tarefa, id=id_tarefa)
    tarefa.descricao = data.descricao
    tarefa.save()
    return tarefa
@router.delete("/{id_tarefa}")
def deletar_tarefa(request, id_tarefa: int):
    tarefa = get_object_or_404(Tarefa, id = id_tarefa)
    tarefa.delete()
    return{"message":"Tarefa deletada com sucesso!"}