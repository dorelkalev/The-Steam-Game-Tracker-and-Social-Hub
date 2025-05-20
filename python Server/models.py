from fastapi_users.db import SQLAlchemyBaseUserTableUUID
from fastapi_users_db_sqlalchemy.access_token import SQLAlchemyBaseAccessTokenTableUUID
from database import Base
from sqlalchemy import Column, String, DateTime, Text, Integer, Boolean


#  Class user, which inherits SQLAlchemyBaseUserTableUUID (data columns like id, email, hashed password, etc)
#                           Base (functionality/metadata for SQLAlchemy)
#  All subclasses like User are called with Base.metadata.create_all()
class User(SQLAlchemyBaseUserTableUUID, Base):
    steam_id = Column(String(length=64), nullable=True, unique=True)
    userName = Column(String(length=64), nullable=True, unique=True)



class AccessToken(SQLAlchemyBaseAccessTokenTableUUID, Base):
    pass

class SteamData(Base):
    __tablename__ = "steamData"
    entry_id = Column(Integer, primary_key=True, autoincrement=True)  #not explicitly necessary, this is mainly a debugging feature. If you have an issue, use this to delete....
    steam_id = Column(String(length=64), index=True)
    date = Column(DateTime)
    payload = Column(Text)
    active = Column(Boolean, default=True)

class AppIDName(Base):
    __tablename__ = "appidname"
    appID = Column(Integer, primary_key=True)
    gameName = Column(String(length=64))