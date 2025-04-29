import uuid

from fastapi_users.authentication import CookieTransport, AuthenticationBackend
from fastapi_users.authentication.strategy import AccessTokenDatabase, DatabaseStrategy
from fastapi_users.db import SQLAlchemyUserDatabase
from fastapi_users import BaseUserManager, UUIDIDMixin, FastAPIUsers,schemas
from fastapi import Depends
from fastapi_users_db_sqlalchemy.access_token import SQLAlchemyAccessTokenDatabase
from sqlalchemy.ext.asyncio import AsyncSession
from typing import AsyncGenerator
from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional


from database import get_async_session
from models import User,AccessToken

#Environment variables
class Environment(BaseSettings):
    model_config = SettingsConfigDict(env_file='settings.env')
    SECRET:str
    STEAM_API_KEY:str
settings = Environment()

#transport setup
cookie_transport = CookieTransport(cookie_name="auth",cookie_max_age=3600)



async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)
async def get_access_token_db( session: AsyncSession = Depends(get_async_session),):
    yield SQLAlchemyAccessTokenDatabase(session, AccessToken)

SECRET = settings.SECRET

class UserManager(UUIDIDMixin,BaseUserManager[User, uuid.UUID]):
    reset_password_token_secret = SECRET
    verification_token_secret = SECRET
    async def on_after_register(self, user: User, request=None):
        print(f"User {user.id} has registered.")

async def get_user_manager(user_db=Depends(get_user_db)) -> AsyncGenerator[UserManager, None]:
    yield UserManager(user_db)

def get_database_strategy(access_token_db: AccessTokenDatabase[AccessToken] = Depends(get_access_token_db),) -> DatabaseStrategy:
    return DatabaseStrategy(access_token_db, lifetime_seconds=3600)

auth_backend = AuthenticationBackend(
    name="cookie-database",
    transport=cookie_transport,
    get_strategy=get_database_strategy,
)

fastapi_users = FastAPIUsers[User,uuid.UUID](get_user_manager,[auth_backend])


class UserRead(schemas.BaseUser[uuid.UUID]):
    steam_id: Optional[str]
    userName: str
class UserCreate(schemas.BaseUserCreate):
    userName: str
    steam_id: Optional[str]
class UserUpdate(schemas.BaseUserUpdate):
    userName: str
    steam_id: Optional[str]

