from collections.abc import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase

DATABASE_URL = "sqlite+aiosqlite:///./test.db"

engine = create_async_engine(DATABASE_URL)  #  instantiate database interface
async_session_maker = async_sessionmaker(engine, expire_on_commit=False) #set up session maker, for individual user "sessions"

class Base(DeclarativeBase): #  base functionality for models like user. Allows us to make changes that affect all subclasses
    pass


#  called asynchronously to build tables along with their models
async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

#  creates temporary async session for each request, yielding processing to the task needing to be done, and automatically closing.
async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session