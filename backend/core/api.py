from ninja import NinjaAPI
from TODO.api import router as TODO_router

api = NinjaAPI()
api.add_router("/To-do", TODO_router)