from django.db import models


# Create your models here.
class Movie(models.Model):
    CATEGORY_CHOICES = [
        (1, 'Adventure'),
        (2, 'Action'),
        (3, 'Thriller'),
        (4, 'Horror'),
        (5, 'Comedy'),
        (6, 'Musical'),
        (7, 'Romance')
    ]

    name = models.CharField(max_length=20, null=False, blank=False)
    link = models.URLField(null=False)
    description = models.CharField(max_length=500)
    category_id = models.PositiveSmallIntegerField(null=False,choices=CATEGORY_CHOICES, blank=False)
    image_path = models.URLField(null=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name