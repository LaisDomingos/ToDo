from django.db import models
from django.contrib.auth import get_user_model
class Task(models.Model):

    STATUS = (
        ("doing", 'Doing'),
        ("done", 'Done'),
    )

    title = models.CharField(max_length=255)
    description = models.TextField()
    done = models.CharField(
        max_length=5,
        choices=STATUS, #Choices -> é um select
    )
    user = models.ForeignKey(get_user_model(), on_delete= models.CASCADE) #Quando um usuário deletar a conta, apagar os dados dele (models.Cascade)
    created_at = models.DateTimeField(auto_now_add=True) #Dia, mês, ano e hoário. Atualiza assim que o registro for criado
    updated_at = models.DateTimeField(auto_now=True) #Sempre que atualiza

    def __str__(self):
        return self.title