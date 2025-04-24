from fastapi_users.db import SQLAlchemyBaseUserTableUUID
from database import Base


#  Class user, which inherits SQLAlchemyBaseUserTableUUID (data columns like id, email, hashed password, etc)
#                           Base (functionality/metadata for SQLAlchemy)
#  All subclasses like User are called with Base.metadata.create_all()
class User(SQLAlchemyBaseUserTableUUID, Base):
    pass