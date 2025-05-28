from django.db import models
from user.models import User


class Tarefa(models.Model):

    descricao = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True)

    def __str__(self):
        return self.descricao

