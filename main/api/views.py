from rest_framework.viewsets import ModelViewSet
from main.models import Product
from main.api.serializers import ProductSerializer


class PostViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer




