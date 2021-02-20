from django.urls import path, include
from .views import MovieViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('movies', MovieViewSet)

urlpatterns = [
    path('', include(router.urls) )
]
