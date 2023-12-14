from django.shortcuts import render
from django.views.generic import View, ListView, DetailView, CreateView, DeleteView, UpdateView
from django.contrib.auth.views import LogoutView, LoginView

from django.http import HttpResponse, HttpRequest

from calculator.forms import *

from django.urls import reverse_lazy
from django.core.mail import send_mail


class MyLoginView(LoginView):
    redirect_authenticated_user = True


class MyLogoutView(LogoutView):
    redirect_authenticated_user = True


class ShowIndexView(View):
    model = News

    def get(self, request: HttpRequest) -> HttpResponse:
        context = {
            'news': News.objects.all()[:3]
        }
        return render(request, 'calculator/index.html', context=context)


class NewsList(ListView):
    model = News
    template_name = 'calculator/news_list.html'
    context_object_name = 'news'


class ShowNewsView(DetailView):
    model = News
    template_name = 'calculator/news_detail.html'
    slug_url_kwarg = 'news_slug'
    context_object_name = 'news'


class NewsCreate(CreateView):
    model = News
    template_name = 'calculator/news_create_form.html'
    fields = ['title', 'content', 'image', ]
    prepopulated_fields = {'slug': ('title',)}
    success_url = reverse_lazy('news')


class DeleteNewsView(DeleteView):
    model = News
    success_url = reverse_lazy('news')


class UpdateNewsView(UpdateView):
    model = News
    template_name = 'calculator/news_update_form.html'
    fields = 'title', 'content', 'image'
    success_url = reverse_lazy('news')


class ContactView(CreateView):
    model = Contact
    template_name = 'calculator/contact_form.html'
    success_url = reverse_lazy('index')
    fields = ['name', 'email', 'phone', 'message']

    def form_valid(self, form):
        # Формируем сообщение для отправки
        data = form.data
        subject = f'Сообщение с формы от {data["name"]} Почта отправителя: {data["email"]} Телефон: {data["phone"]}'
        email(subject, data['message'])
        return super().form_valid(form)


# Функция отправки сообщения

def email(subject, content):
    send_mail(subject,
              content,
              '',
              ['']
              )


# Функция, которая вернет сообщение в случае успешного заполнения формы

def success(request):
    return HttpResponse('Письмо отправлено!')
