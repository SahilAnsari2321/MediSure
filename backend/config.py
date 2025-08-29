import os

class Config:
    MONGO_URI = os.getenv(
        "MONGO_URI",
        "mongodb://localhost:27017/medisure"
        # "mongodb+srv://aryan:HeyMedi@cluster0.e7bdygs.mongodb.net/medisure?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true&appName=Cluster0"
    )
    SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "your_jwt")
