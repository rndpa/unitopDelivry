from django.contrib import admin

from calculator.models import *

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ['title', 'create_at']
    
    list_display_links = ['title',]
    
    prepopulated_fields = {
        'slug': ('title',)
    }
    
    
@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'message', 'create_at']
