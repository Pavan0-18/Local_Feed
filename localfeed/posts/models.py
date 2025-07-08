from django.db import models
from users.models import User
# Create your models here.
class Post(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField(max_length=100)
    content=models.TextField()
    location=models.CharField(max_length=6)
    created_at=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.title}-{self.location}"
    