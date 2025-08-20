from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path

# --- Path Configuration ---
# This ensures that paths are correct regardless of the working directory.
BASE_DIR = Path(__file__).resolve().parent.parent
BUILD_DIR = BASE_DIR / "build"
STATIC_DIR = BUILD_DIR / "static"
INDEX_HTML = BUILD_DIR / "index.html"

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

# --- Static Files & SPA Fallback ---
# This should only be active if the frontend has been built.
if INDEX_HTML.exists():
    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

    @app.get("/{full_path:path}", include_in_schema=False)
    async def serve_react_app(full_path: str):
        return FileResponse(INDEX_HTML)
else:
    import logging
    logging.warning("Frontend build not found at {}. Serving API only.".format(INDEX_HTML))
