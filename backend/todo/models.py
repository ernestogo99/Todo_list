from django.db import models
from user.models import User
from datetime import datetime

class Tarefa(models.Model):

    descricao = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    create=models.DateTimeField(default=datetime.now)
    finished=models.DateField(null=True,blank=True,default=None)

    def __str__(self):
        return self.descricao

