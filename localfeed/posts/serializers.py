from rest_framework import serializers
from .models import Post
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields='__all__'
        read_only_fields=['user','created_at']
        