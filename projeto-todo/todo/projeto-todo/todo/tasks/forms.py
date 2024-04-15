from django import forms

from .models import Task 

#Task vai ser o molde do nosso formulário
class TaskForm(forms.ModelForm):

    class Meta:
        model = Task
        fields = ('title', 'description') #Os campos que quero que apareça no frontend, de cara o status será sempre "doing" e o restante é preenchido automáticamente