# models.py

from django.db import models

class Translation(models.Model):
    en = models.TextField()
    ru = models.TextField()

    def __str__(self):
        return self.key
