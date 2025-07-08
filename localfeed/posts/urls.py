from django.urls import path
from .views import PostListCreateView, MyPostsView

urlpatterns = [
    path('', PostListCreateView.as_view()),
    path('mine/', MyPostsView.as_view()),
]