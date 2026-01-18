from openai import OpenAI
import os

from backend.model.chatRequest import ChatRequest

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def chat(payload: ChatRequest) :
    context = load_context_from_file("data.txt")
    messages = build_messages(payload, context)

    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=messages
    )

    reply = completion.choices[0].message.content
    return {"response": reply}


def load_context_from_file(path: str) -> str:
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

def build_messages(payload: ChatRequest, context: str):
    messages = []

    # System instruction
    messages.append({
        "role": "system",
        "content": (
            "You are a helpful assistant. "
            "Answer the user's question using the provided context. "
            "If the answer is not in the context, say you don't know."
        )
    })

    # Retrieved context (RAG part)
    messages.append({
        "role": "system",
        "content": f"Context:\n{context}"
    })

    # Chat history
    for msg in payload.chatHistory:
        messages.append({
            "role": msg["role"],
            "content": msg["content"]
        })

    # Current user message
    messages.append({
        "role": "user",
        "content": payload.message
    })

    return messages


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