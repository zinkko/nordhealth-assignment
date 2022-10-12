from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from os import getenv

Base = declarative_base()

class User(Base):
    __tablename__ = "user_account"
    
    id = Column(Integer, primary_key = True)
    name = Column(String)
    email = Column(String)

    def __repr__(self):
        return f"User(id={self.id!r}, name={self.name!r}, fullname={self.fullname!r}"


class DbConnection(object):
    def __init__(self):
        url = getenv('DATABASE_URL')
        self.engine = create_engine(url)
        Base.metadata.bind = self.engine
        Base.metadata.create_all()
    
    def get_session(self):
        Session = sessionmaker(bind = self.engine)
        return Session()
