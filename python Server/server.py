from fastapi import FastAPI, Request, Depends
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from authentication import fastapi_users,auth_backend,UserRead,UserCreate,UserUpdate
from contextlib import asynccontextmanager
from database import create_db_and_tables



#database setup
@asynccontextmanager
async def lifespan(app: FastAPI):
    await create_db_and_tables()
    yield


server = FastAPI(lifespan=lifespan)
server.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

#HOMEPAGE
@server.get("/", response_class=HTMLResponse)
async def homepage(request:Request):
    return templates.TemplateResponse("homepage.html", {"request":request})
#GAMES
@server.get("/games", response_class=HTMLResponse)
async def homepage(request:Request):
    return templates.TemplateResponse("games.html", {"request":request})
#FRIENDS
@server.get("/friends", response_class=HTMLResponse)
async def homepage(request:Request):
    return templates.TemplateResponse("friends.html", {"request":request})
#COMMUNITY
@server.get("/community", response_class=HTMLResponse)
async def homepage(request:Request):
    return templates.TemplateResponse("community.html", {"request":request})
#PROFILE
@server.get("/profile", response_class=HTMLResponse)
async def homepage(request:Request):
    return templates.TemplateResponse("profile.html", {"request":request})

server.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth",
    tags=["auth"]
)
server.include_router(
    fastapi_users.get_register_router(UserRead,UserCreate),
    prefix="/auth",
    tags=["auth"],
)
server.include_router(
    fastapi_users.get_users_router(UserRead,UserUpdate),
    prefix="/users",
    tags=["users"],
)

#protected route test
@server.get("/protected")
async def protected_route(user=Depends(fastapi_users.current_user(active=True))):
    return {"message": f"Hello {user.email}, you are logged in!"}




#       SETUP ROUTES for AUTH
#       Test endpoints
# TODO:
#       Protect Routes (Make profile pages?)
#       Email verification (maybe?), password reset
#       Customize user model (add steamID field (profile settings?))