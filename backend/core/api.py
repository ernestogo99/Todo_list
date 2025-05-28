from ninja import NinjaAPI
from todo.api import router as TODO_router
from user.api import users_router
from login.api import auth_router

api = NinjaAPI()
api.add_router("todo/", TODO_router)
api.add_router("user/",users_router)
api.add_router("login/",auth_router)
