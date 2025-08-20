from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

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
from .routers import announcement, company, infra, content, consultation, user, admin, service, stat, cluster, support_program, incubation_center, technology, education, mentor, search, auth, article

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
app.include_router(article.router, prefix="/api")
# ...

# --- Static Files ---
# Serve the static files from the React build directory
app.mount("/static", StaticFiles(directory="../build/static"), name="static")


# --- SPA Fallback ---
# For any other path, serve the index.html file from the React build.
# This should be the last route.
@app.get("/{full_path:path}", include_in_schema=False)
async def serve_react_app(full_path: str):
    return FileResponse("../build/index.html")
