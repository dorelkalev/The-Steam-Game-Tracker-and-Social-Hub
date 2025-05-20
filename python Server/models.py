
from fastapi_users.db import SQLAlchemyBaseUserTableUUID
from fastapi_users_db_sqlalchemy.access_token import SQLAlchemyBaseAccessTokenTableUUID
from database import Base
from sqlalchemy import Column, String, DateTime, Text, Integer, Boolean
from pydantic import EmailStr
from fastapi_users.schemas import CreateUpdateDictModel


class User(SQLAlchemyBaseUserTableUUID, Base):
    steam_id = Column(String(length=64), nullable=True, unique=True)
    userName = Column(String(length=64), nullable=True)


class AccessToken(SQLAlchemyBaseAccessTokenTableUUID, Base):
    pass


class SteamData(Base):
    __tablename__ = "steamData"
    entry_id = Column(Integer, primary_key=True, autoincrement=True)
    steam_id = Column(String(length=64), index=True)
    date = Column(DateTime)
    payload = Column(Text)

class SteamIDs(Base):
    __tablename__ = "steamids"
    steam_id = Column(Integer, primary_key=True)
    active = Column(Boolean)



class UserCreateModel(CreateUpdateDictModel):
    email: EmailStr
    password: str
    steam_id: str
    userName: str