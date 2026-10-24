import logging
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

logger = logging.getLogger("core")


class ContactView(APIView):
    """
    Handles contact form submissions.
    DRF automatically supports OPTIONS requests for CORS preflight.
    """

    def post(self, request):
        name = request.data.get("name")
        email = request.data.get("email")
        message = request.data.get("message")

        subject = f"New Contact Form Submission from {name}"
        body = f"Name: {name}\nEmail: {email}\nMessage:\n{message}"

        try:
            send_mail(
                subject,
                body,
                settings.DEFAULT_FROM_EMAIL,
                ["info@bashsoftdigital.com"],  # recipient
                fail_silently=False,
            )
            return Response({"success": True}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("Contact form error", exc_info=True)
            return Response(
                {"error": "Error sending message."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
