from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    dates = models.CharField(max_length=100)
    tags = models.JSONField()  # Store tags as JSON

    def __str__(self):
        return self.title