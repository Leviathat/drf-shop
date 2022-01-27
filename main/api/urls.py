from rest_framework import routers
from main.api.views import ProductViewSet
from django.urls import path

router = routers.SimpleRouter()
router.register('product', ProductViewSet, basename='post-api')

urlpatterns = []
urlpatterns += router.urls
