from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="JB SQUARE API",
    description="API for the JB SQUARE Platform Prototype",
    version="0.2.0"
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# --- API Routers ---
# Routers for each domain will be included here to modularize the application.
from .routers import announcement, company, infra, content, consultation, user, admin, service, stat, cluster, support_program, incubation_center, technology, education, mentor, search, auth

app.include_router(announcement.router, prefix="/api")
app.include_router(company.router, prefix="/api")
app.include_router(infra.router, prefix="/api")
app.include_router(content.router, prefix="/api")
app.include_router(consultation.router, prefix="/api")
app.include_router(user.router, prefix="/api")
app.include_router(admin.router, prefix="/api")
app.include_router(service.router, prefix="/api")
app.include_router(stat.router, prefix="/api")
app.include_router(cluster.router, prefix="/api")
app.include_router(support_program.router, prefix="/api")
app.include_router(incubation_center.router, prefix="/api")
app.include_router(technology.router, prefix="/api")
app.include_router(education.router, prefix="/api")
app.include_router(mentor.router, prefix="/api")
app.include_router(search.router, prefix="/api")
app.include_router(auth.router, prefix="/api")
# ...


@app.get("/", tags=["Root"])
def read_root():
    """
    Root endpoint to check if the API is running.
    """
    return {"message": "Welcome to the JBio Hub API!"}
