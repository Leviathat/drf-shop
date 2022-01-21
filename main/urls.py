from django.urls import path
from main.views import *


urlpatterns = [
    path('', HomeView.as_view(), name="home"),
    path('cart', ArticleCartView.as_view(), name="my-cart"),
    path('order/', OrderView.as_view(), name="order"),
    path('order/test/', get_cookie_cart, name="test"),
]

