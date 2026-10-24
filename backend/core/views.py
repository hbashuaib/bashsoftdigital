import logging
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

logger = logging.getLogger("core")

@api_view(['POST', 'OPTIONS'])
def contact(request):
    if request.method == "OPTIONS":
        # DRF + django-cors-headers will handle the headers automatically
        return Response(status=status.HTTP_200_OK)

    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    subject = f"New Contact Form Submission from {name}"
    body = f"Name: {name}\nEmail: {email}\nMessage:\n{message}"

    try:
        send_mail(
            subject,
            body,
            settings.DEFAULT_FROM_EMAIL,
            ["info@bashsoftdigital.com"],
            fail_silently=False,
        )
        return Response({"success": True}, status=status.HTTP_200_OK)
    except Exception as e:
        logger.error("Contact form error", exc_info=True)
        return Response({"error": "Error sending message."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

