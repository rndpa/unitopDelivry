from django.db import models
from django.urls import reverse
from pytils.translit import slugify


class News(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    content = models.TextField('Текст новости', blank=True, max_length=5000)
    image = models.ImageField('Картинка', upload_to='photos/%Y/%m/%d')
    slug = models.SlugField('URL', max_length=255, unique=True, db_index=True)
    create_at = models.DateTimeField('Дата создания', auto_now_add=True)

    def __str__(self) -> str:
        return self.title

    def get_absolute_url(self):
        return reverse('news_detail', kwargs={'news_slug': self.slug})

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['-create_at',]
        
        
class Contact(models.Model):
    name = models.CharField('Имя', max_length=255)
    email = models.EmailField('Email', max_length=255)
    phone = models.CharField('Телефон', max_length=255)
    message = models.TextField('Сообщение', blank=True, max_length=5000)
    create_at = models.DateTimeField('Дата создания', auto_now_add=True)
    
    class Meta:
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'
    
    def __str__(self) -> str:
        return self.email