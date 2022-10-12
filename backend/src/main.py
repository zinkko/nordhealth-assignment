from fastapi import FastAPI
from pydantic import BaseModel

from .db import DbConnection, User

app = FastAPI()

connection = DbConnection()

@app.get("/")
async def root():
    return {
        "message": "Hello World",
        "backend": "users",
    }

@app.get("/users")
async def users_route():
    ses = connection.get_session()
    users = list(ses.query(User))
    return users

class UserModel(BaseModel):
    name: str
    email: str

@app.post("/users", status_code=201)
async def create_user_route(request_body: UserModel):
    user = User(
        name=request_body.name,
        email=request_body.email,
    )
    ses = connection.get_session()
    ses.add(user)
    ses.commit()
    ses.refresh(user)

    return {
        'id': user.id,
        'name': user.name,
        'email': user.email,
    }

