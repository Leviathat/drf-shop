from rest_framework import routers
from main.api.views import ProductViewSet, CartViewSet
from django.urls import path

router = routers.SimpleRouter()
router.register('product', ProductViewSet, basename='post-api')
router.register('cart', CartViewSet, basename='cart-api')

urlpatterns = []
urlpatterns += router.urls
