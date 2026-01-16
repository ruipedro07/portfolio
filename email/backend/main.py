# backend/main.py
from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from pydantic import BaseModel
from openai import OpenAI
from fastapi.responses import StreamingResponse

app = FastAPI(root_path="/api")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["POST"],
    allow_headers=["*"],
)

SMTP_SERVER = "mail.ruiribeiro.dev"  # or your provider
SMTP_PORT = 587
EMAIL_ADDRESS = "contact@ruiribeiro.dev"  # Your email
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

#client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@app.post("/contact")
async def contact_form(name: str = Form(...), email: EmailStr = Form(...), message: str = Form(...)):
    try:
        # Send email to you
        msg_to_you = MIMEMultipart()
        msg_to_you["From"] = EMAIL_ADDRESS
        msg_to_you["To"] = EMAIL_ADDRESS
        msg_to_you["Subject"] = f"New Contact Form Message from {name}"
        msg_to_you.attach(MIMEText(f"Name: {name}\nEmail: {email}\nMessage:\n{message}", "plain"))

        # Send automatic reply to user
        msg_to_user = MIMEMultipart()
        msg_to_user["From"] = EMAIL_ADDRESS
        msg_to_user["To"] = email
        msg_to_user["Subject"] = "Thanks for contacting me!"
        msg_to_user.attach(MIMEText(f"Hi {name},\n\nThank you for reaching out!\n\nHere is a copy of your message:\n\"{message}\"\n\nI'll get back to you soon.\n\nBest,\nRui", "plain"))

        # Connect to SMTP server
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)

        server.send_message(msg_to_you)
        server.send_message(msg_to_user)
        server.quit()

        return {"success": True, "message": "Email sent successfully!"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))



#class ChatRequest(BaseModel):
#    message: str

# @app.post("/chat")
# async def chat_endpoint(payload: ChatRequest):
#     # Send the user's message to the Chat Completions endpoint
#     completion = client.chat.completions.create(
#         model="gpt-3.5-turbo",  # or "gpt-4o-mini", etc.
#         messages=[
#             {"role": "user", "content": payload.message}
#         ]
#     )
#     # Extract and return the model’s reply
#     reply = completion.choices[0].message.content
#     return {"response": reply}
#
#
# @app.post("/chat/stream")
# async def chat_stream(payload: ChatRequest):
#
#     def generator():
#         stream = client.chat.completions.create(
#             model="gpt-3.5-turbo",
#             messages=[{"role": "user", "content": payload.message}],
#             stream=True
#         )
#
#         for chunk in stream:
#             content = chunk.choices[0].delta.content
#             if content:
#                 yield content
#
#     return StreamingResponse(generator(), media_type="text/plain")