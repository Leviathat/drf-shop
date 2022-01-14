from rest_framework.serializers import ModelSerializer
from main.models import Product


class ProductSerializer(ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        image = validated_data.pop('image')
