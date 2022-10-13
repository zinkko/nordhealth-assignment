from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from .db import DbConnection, User

app = FastAPI()

origins = [
    'http://localhost:3000',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['GET', 'POST', 'DELETE'],
    allow_headers=['*'],
)

connection = DbConnection()


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

@app.delete("/users/{user_id}")
async def delete_user_route(user_id: int):
    ses = connection.get_session()
    ses.query(User).filter_by(id = user_id).delete()
    ses.commit()

    return {
        'id': user_id,
    }

