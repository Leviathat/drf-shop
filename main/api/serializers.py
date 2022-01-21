from rest_framework.serializers import ModelSerializer
from main.models import Product, Cart


class ProductSerializer(ModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'sold', 'type', 'image')


class CartSerializer(ModelSerializer):

    class Meta:
        model = Cart
        fields = ('cart_items', )
