from django.urls import path
from .views import ContactView

from django.http import JsonResponse

def api_root(request):
    return JsonResponse({"message": "Welcome to BashSoft Digital API"})

urlpatterns = [
    path("", api_root),  # now /api/ responds
    path('contact/', ContactView.as_view(), name='contact'),
]
