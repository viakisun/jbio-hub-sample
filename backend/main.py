from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="JBio Hub API",
    description="Backend API for the Jeonbuk Bio Hub Platform.",
    version="1.0.0",
)

# --- CORS Middleware ---
# This allows the frontend (running on localhost:3000) to communicate with the backend.
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- API Routers ---
# Routers for each domain will be included here to modularize the application.
from .routers import announcement, company, infra, content, consultation, user, admin

app.include_router(announcement.router)
app.include_router(company.router)
app.include_router(infra.router)
app.include_router(content.router)
app.include_router(consultation.router)
app.include_router(user.router)
app.include_router(admin.router)
# ...


@app.get("/", tags=["Root"])
def read_root():
    """
    Root endpoint to check if the API is running.
    """
    return {"message": "Welcome to the JBio Hub API!"}
