from django.core.management.base import BaseCommand
from django.core.mail import send_mail

class Command(BaseCommand):
    help = "Send a test email"

    def handle(self, *args, **kwargs):
        send_mail(
            subject="Test Email from Django",
            message="This is a test email sent via Zoho SMTP.",
            from_email="info@bashsoftdigital.com",
            recipient_list=["husseinbashuaib@gmail.com"],  # replace with your Gmail
            fail_silently=False,
        )
        self.stdout.write(self.style.SUCCESS("Test email sent successfully"))
