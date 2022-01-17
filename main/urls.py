from django.urls import path
from main.views import *


urlpatterns = [
    path('', HomeView.as_view(), name="hello"),
    path('cart', ArticleCartView.as_view(), name="my-cart"),
]

