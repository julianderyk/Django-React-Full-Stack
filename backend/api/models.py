from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title

class Listing(models.Model):
    title = models.CharField(max_length=100)
    addr_street = models.CharField(max_length=50)
    addr_number = models.CharField(max_length=50)
    addr_postcode = models.CharField(max_length=50)
    addr_city = models.CharField(max_length=50)
    addr_region = models.CharField(max_length=50)
    addr_country = models.CharField(max_length=5050)
    addr_lat = models.CharField(max_length=50)
    addr_lng = models.CharField(max_length=50)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="listings")

    def __str__(self):
        return self.title