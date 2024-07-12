# в файле translator/api.py

from rest_framework import generics
from .models import Translation
from .serializers import TranslationSerializer

class TranslationListCreateAPIView(generics.ListCreateAPIView):
    queryset = Translation.objects.all()
    serializer_class = TranslationSerializer
