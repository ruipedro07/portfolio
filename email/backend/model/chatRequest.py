from pydantic import BaseModel

class ChatRequest(BaseModel):
    message: str
    chatHistory: list  # e.g. [{"role": "user", "content": "..."}, {"role": "assistant", "content": "..."}]






