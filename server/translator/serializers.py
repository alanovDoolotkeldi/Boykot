# в файле translator/serializers.py

from rest_framework import serializers
from .models import Translation

class TranslationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Translation
        fields = '__all__'  # или укажите нужные поля, которые вы хотите сериализовать
