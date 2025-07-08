from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Post
from .serializers import PostSerializer
# Create your views here.
class PostListCreateView(generics.ListCreateAPIView):
    serializer_class=PostSerializer
    permission_classes=[permissions.IsAuthenticated]
    def get_queryset(self):
        return Post.objects.filter(location=self.request.user.profile.location).order_by('-created_at')
    def perform_create(self,serializer):
        serializer.save(user=self.request.user,location=self.request.user.profile.location)

class MyPostsView(generics.ListAPIView):
    serializer_class=PostSerializer
    permission_classes=[permissions.IsAuthenticated]
    def get_queryset(self):
        return Post.objects.filter(user=self.request.user).order_by("-created_at")