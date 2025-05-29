from ninja import Schema,ModelSchema
from typing import Optional
from .models import Tarefa

class TaskSchema(ModelSchema):
     class Meta:
        model=Tarefa
        fields='__all__'

class TaskCreateSchema(Schema):
    descricao: str
    done: Optional[bool] = False

class TaskUpdateSchema(Schema):
    descricao: str
    done:bool
