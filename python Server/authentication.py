from fastapi_users.db import SQLAlchemyUserDatabase
from fastapi import Depends

from sqlalchemy.ext.asyncio import AsyncSession

from database import get_async_session
from models import User




async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)

#  TODO: Set up FastAPI Users instance