from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
server = FastAPI()

server.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")



#HOMEPAGE
@server.get("/", response_class=HTMLResponse)
async def homepage(request:Request):
    return templates.TemplateResponse("homepage.html", {"request":request})
#GAMES
@server.get("/games", response_class=HTMLResponse)
async def homepage(request:Request):
    return templates.TemplateResponse("homepage.html", {"request":request})
#FRIENDS
@server.get("/friends", response_class=HTMLResponse)
async def homepage(request:Request):
    return templates.TemplateResponse("homepage.html", {"request":request})
#COMMUNITY
@server.get("/community", response_class=HTMLResponse)
async def homepage(request:Request):
    return templates.TemplateResponse("homepage.html", {"request":request})
#PROFILE
@server.get("/profile", response_class=HTMLResponse)
async def homepage(request:Request):
    return templates.TemplateResponse("homepage.html", {"request":request})