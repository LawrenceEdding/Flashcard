from django.db import models


class Collection(models.Model):
    title = models.CharField(max_length=50)
