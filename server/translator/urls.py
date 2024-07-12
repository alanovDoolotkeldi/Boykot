# в файле translator/urls.py

from django.urls import path
from . import views, api

urlpatterns = [
    path('', views.index, name='index'),  # ваше основное представление
    path('api/', api.TranslationListCreateAPIView.as_view(), name='translation-list-create'),
    # Добавьте другие URL-шаблоны здесь, если они есть
]
