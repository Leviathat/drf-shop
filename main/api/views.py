from rest_framework.viewsets import ModelViewSet
from main.models import Product, Cart
from main.api.serializers import ProductSerializer, MainCartSerializer


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CartViewSet(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = MainCartSerializer

