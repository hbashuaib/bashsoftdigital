import os
import requests
from django.conf import settings

def send_zoho_mail(subject, body, to_email):
    url = settings.ZOHO_MAIL_API_URL
    headers = {
        "Authorization": f"Zoho-oauthtoken {os.environ.get('ZOHO_ACCESS_TOKEN')}"
    }
    payload = {
        "fromAddress": settings.DEFAULT_FROM_EMAIL,
        "toAddress": to_email,
        "subject": subject,
        "content": body
    }
    response = requests.post(url, headers=headers, data=payload)
    return response.status_code, response.text


def refresh_zoho_token():
    url = "https://accounts.zoho.com/oauth/v2/token"
    payload = {
        "refresh_token": os.environ.get("ZOHO_REFRESH_TOKEN"),
        "client_id": "1000.9SLDWM8U9Z8Z8NA6KPELLJR4MKODFX",
        "client_secret": "c8d8d199c625a5b03be63d198abe57b3375e76814c",
        "grant_type": "refresh_token"
    }
    response = requests.post(url, data=payload)
    data = response.json()
    if "access_token" in data:
        os.environ["ZOHO_ACCESS_TOKEN"] = data["access_token"]
    return data
