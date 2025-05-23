# from sqlalchemy import create_engine, MetaData
# from sqlalchemy.orm import sessionmaker
# from sqlalchemy.ext.declarative import declarative_base
# import os
# from dotenv import load_dotenv, dotenv_values 





# URL_DATABASE = "jdbc:mariadb://localhost:3306/renouser"


# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()




# engine = create_engine(URL_DATABASE)
# SessionLocal = sessionmaker(autocommit=False, autoflush=False,bind=engine)
# metadata = MetaData()
# metadata.reflect(bind=engine)
# Base = declarative_base()