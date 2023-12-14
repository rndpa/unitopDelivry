from django.forms import ModelForm
from .models import News, Contact
from django.forms import Textarea

class NewsForm(ModelForm):
    class Meta:
        model = News
        fields = [
            'title',
            'content',
            'image',
            ]
        prepopulated_fields = {'slug': ('title',)}
        
        
        
class ContactForm(ModelForm):
    class Meta:
        # Определяем модель, на основе которой создаем форму
        model = Contact
        # Поля, которые будем использовать для заполнения
        fields = ['name', 'email', 'phone', 'message']
        widgets = {
            'phone': Textarea(attrs={'rows': 3}),
            'message': Textarea(
                attrs={
                    'placeholder': 'Напишите тут ваше сообщение'
                }
            )
        }