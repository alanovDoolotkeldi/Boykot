# views.py

from rest_framework import generics
from .models import Translation
from .serializers import TranslationSerializer
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the translator index.")


class TranslationListView(generics.ListAPIView):
    queryset = Translation.objects.all()
    serializer_class = TranslationSerializer
