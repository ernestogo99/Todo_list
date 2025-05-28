from django.db import models

# Create your models here.

class Tarefa(models.Model):

    descricao = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    def __str__(self):
        return self.descricao

