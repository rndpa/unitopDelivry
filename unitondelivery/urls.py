
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from calculator.views import *

from unitondelivery import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', ShowIndexView.as_view(), name='index'),    
    path('login/', LoginView.as_view(), name='login'),
    path('contact/', ContactView.as_view(), name='contact'),
    path('news/', NewsList.as_view(), name='news'),
    path('news/create/', NewsCreate.as_view(), name='create_news'),
    path('news/<slug:news_slug>/detail', ShowNewsView.as_view(), name='news_detail'),
    path('news/<slug:slug>/delete/', DeleteNewsView.as_view(), name='delete_news'),
    path('news/<slug:slug>/update/', UpdateNewsView.as_view(), name='update_news'),
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

