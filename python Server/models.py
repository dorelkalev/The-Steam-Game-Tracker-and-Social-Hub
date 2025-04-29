from fastapi_users.db import SQLAlchemyBaseUserTableUUID
from fastapi_users_db_sqlalchemy.access_token import SQLAlchemyBaseAccessTokenTableUUID
from database import Base
from sqlalchemy import Column, String


#  Class user, which inherits SQLAlchemyBaseUserTableUUID (data columns like id, email, hashed password, etc)
#                           Base (functionality/metadata for SQLAlchemy)
#  All subclasses like User are called with Base.metadata.create_all()
class User(SQLAlchemyBaseUserTableUUID, Base):
    steam_id = Column(String(length=64), nullable=True, unique=True)
    userName = Column(String(length=64), nullable=True, unique=True)



class AccessToken(SQLAlchemyBaseAccessTokenTableUUID, Base):
    pass

