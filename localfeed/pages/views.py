from django.shortcuts import render

def register_page(request):
    return render(request, 'register.html')

def login_page(request):
    return render(request, 'login.html')
def feed_page(request):
    return render(request, 'feed.html')