
from fastapi import FastAPI, Request, Depends, HTTPException, status, Body
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from authentication import fastapi_users, cookie_backend, jwt_backend
from models import UserCreateModel
from contextlib import asynccontextmanager
from database import create_db_and_tables

@asynccontextmanager
async def lifespan(app: FastAPI):
    await create_db_and_tables()
    yield

server = FastAPI(lifespan=lifespan)
server.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# ✅ Homepage for unlocked users
@server.get("/", response_class=HTMLResponse)
async def homepage(request: Request):
    return templates.TemplateResponse("homepage.html", {"request": request})

# ✅ Profile page for login/register
@server.get("/profile", response_class=HTMLResponse)
async def profile(request: Request):
    return templates.TemplateResponse("profile.html", {"request": request})

# Other pages
@server.get("/games", response_class=HTMLResponse)
async def games(request: Request):
    return templates.TemplateResponse("games.html", {"request": request})

@server.get("/friends", response_class=HTMLResponse)
async def friends(request: Request):
    return templates.TemplateResponse("friends.html", {"request": request})

@server.get("/community", response_class=HTMLResponse)
async def community(request: Request):
    return templates.TemplateResponse("community.html", {"request": request})

@server.get("/statistics", response_class=HTMLResponse)
async def statistics(request: Request):
    return templates.TemplateResponse("statistics.html", {"request": request})

@server.get("/dashboard", response_class=HTMLResponse)
async def dashboard(request: Request):
    return templates.TemplateResponse("statistics.html", {"request": request})

@server.get("/velocity", response_class=HTMLResponse)
async def velocity(request: Request):
    return templates.TemplateResponse("velocity.html", {"request": request})

# ✅ Auth Routers
server.include_router(
    fastapi_users.get_auth_router(cookie_backend),
    prefix="/auth/cookie",
    tags=["auth"]
)

server.include_router(
    fastapi_users.get_auth_router(jwt_backend),
    prefix="/auth/jwt",
    tags=["auth"]
)


@server.post("/auth/register")
async def register(
        user: UserCreateModel = Body(...),
        user_manager=Depends(fastapi_users.get_user_manager),
):
    try:
        new_user = await user_manager.create(user)
        return {"detail": "User created successfully", "user_id": new_user.id}
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))


@server.get("/protected")
async def protected_route(user=Depends(fastapi_users.current_user())):
    return {"message": f"Hello {user.id}, you are authenticated!"}