from ninja import Schema
from typing import Optional
class TaskSchema(Schema):
    id:int
    descricao: str
    done: bool

class TaskCreateSchema(Schema):
    descricao: str
    done: Optional[bool] = False

class TaskUpdateSchema(Schema):
    descricao: str
