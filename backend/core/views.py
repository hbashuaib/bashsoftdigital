import logging
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from core.utils import send_zoho_mail

logger = logging.getLogger("core")


class ContactView(APIView):
    def post(self, request):
        name = request.data.get("name")
        email = request.data.get("email")
        message = request.data.get("message")

        subject = f"New Contact Form Submission from {name}"
        body = f"Name: {name}\nEmail: {email}\nMessage:\n{message}"

        try:
            status_code, resp = send_zoho_mail(
                subject,
                body,
                "info@bashsoftdigital.com"
            )
            if status_code == 200:
                return Response({"success": True}, status=status.HTTP_200_OK)
            else:
                logger.error(f"Zoho API error: {resp}")
                return Response({"error": "Zoho API error"}, status=500)
        except Exception as e:
            logger.error("Contact form error", exc_info=True)
            return Response({"error": "Error sending message."}, status=500)