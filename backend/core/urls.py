from django.urls import path
from .views import contact

from django.http import JsonResponse

def api_root(request):
    return JsonResponse({"message": "Welcome to BashSoft Digital API"})

urlpatterns = [
    path("", api_root),  # now /api/ responds
    path('contact/', contact, name='contact'),
]
