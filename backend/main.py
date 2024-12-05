from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from openai import OpenAI
import os
from fastapi.middleware.cors import CORSMiddleware

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),  # This is the default and can be omitted
)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins = 'http://localhost:3000/',
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*']
)
# Request body model
class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        # Call OpenAI's ChatGPT model
        response = client.chat.completions.create(
            messages=[
                        {
                            "role": "user",
                            "content": request.message,
                        }
                    ],
            model="gpt-4o",
            
        )
        # Extract and return the reply from the model
        reply = response.choices[0].message.content
        return {"reply": reply}
    except :
        # Handle OpenAI API errors gracefully
        raise HTTPException(status_code=500, detail=f"OpenAI API error")
