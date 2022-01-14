from rest_framework import routers
from main.api.views import PostViewSet
from django.urls import path

router = routers.SimpleRouter()
router.register('post', PostViewSet, basename='post-api')

urlpatterns = []
urlpatterns += router.urls
