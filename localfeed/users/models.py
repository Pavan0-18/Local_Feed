from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    location = models.CharField(max_length=10)
class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    location=models.CharField(max_length=6)
    def __str__(self):
        return f"{self.user.username} - {self.location}"