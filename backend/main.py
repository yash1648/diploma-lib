from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174","http://localhost:5174"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    name: str
    description: str
    price: float

@app.get("/")
async def read_root():
    return {"message": "Welcome to FastAPI"}

@app.post("/items/")
async def create_item(item: Item):
    return {"message": f"Item {item.name} created", "data": item}
