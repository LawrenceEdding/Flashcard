from django.db import models
from Collections.models import Collection


class Flashcard(models.Model):
    word = models.CharField(max_length=50)
    definition = models.TextField()
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE)
