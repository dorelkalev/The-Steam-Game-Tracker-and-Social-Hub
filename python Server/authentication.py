import os
from typing import AsyncGenerator
from fastapi import Depends
from fastapi_users import FastAPIUsers, BaseUserManager, IntegerIDMixin
from fastapi_users.authentication import CookieTransport, JWTStrategy, AuthenticationBackend
from fastapi_users.db import SQLAlchemyUserDatabase
from pydantic import BaseModel, EmailStr
from models import User
from database import get_async_session

# ✅ Custom User Create Schema
class UserCreateSchema(BaseModel):
    email: EmailStr
    password: str
    steam_id: str
    userName: str

# Cookie transport setup
cookie_transport = CookieTransport(cookie_name="steam_cookie", cookie_max_age=3600)

# Cookie-based authentication backend
cookie_backend = AuthenticationBackend(
    name="cookie",
    transport=cookie_transport,
    get_strategy=lambda: JWTStrategy(secret=os.getenv("SECRET", "SUPERSECRET"), lifetime_seconds=3600),
)


jwt_backend = AuthenticationBackend(
    name="jwt",
    transport=cookie_transport,
    get_strategy=lambda: JWTStrategy(secret=os.getenv("SECRET", "SUPERSECRET"), lifetime_seconds=3600),
)

async def get_user_db():
    async for session in get_async_session():
        yield SQLAlchemyUserDatabase(session, User)


class UserManager(IntegerIDMixin, BaseUserManager[User, int]):
    reset_password_token_secret = os.getenv("SECRET", "SUPERSECRET")
    verification_token_secret = os.getenv("SECRET", "SUPERSECRET")

    async def on_after_register(self, user: User, request=None):
        print(f"User {user.id} has registered.")


async def get_user_manager(user_db=Depends(get_user_db)):
    yield UserManager(user_db)


fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [cookie_backend, jwt_backend],
)