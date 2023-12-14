# Generated by Django 4.1.7 on 2023-03-19 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calculator', '0002_alter_news_content_alter_news_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Имя')),
                ('email', models.EmailField(max_length=255, verbose_name='Email')),
                ('phone', models.CharField(max_length=255, verbose_name='Телефон')),
                ('message', models.TextField(blank=True, max_length=5000, verbose_name='Сообщение')),
                ('create_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
            ],
        ),
    ]
