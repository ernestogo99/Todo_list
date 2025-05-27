from ninja import Router
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from .schemas import UserSchema
from .models import User

users_router = Router(tags=['User'])

@users_router.post('/', response={200: dict, 400: dict, 500: dict})
def create_user(request, user_schema: UserSchema):
    """Rota para criar um usuário."""
    user = User(**user_schema.user.dict())
    user.password = make_password(user.password)
    try:
        user.full_clean()
        user.save()

    except ValidationError as e:
        return 400, {'errors': e.message_dict}

    except Exception as e:
        return 500, {'errors': str(e)}

    return {
        'user_id': user.id,
        'username': user.username,  
    }
