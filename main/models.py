from django.db import models
from django.conf import settings
import random
from django.db import models
from django.contrib.auth.models import User
from datetime import datetime, timezone


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.PositiveIntegerField()
    created_at = models.TimeField(auto_now_add=True)
    type = models.CharField(max_length=25, choices=settings.YEAR_IN_SCHOOL_CHOICES, default=None)
    image = models.ImageField(verbose_name='Изображение', blank=True, upload_to="images/product/", null=True)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.type}: {self.name}'


class Customer(models.Model):
    user = models.OneToOneField(User, verbose_name="Покупатель", on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=True, verbose_name="Имя покупателя")
    surname = models.CharField(max_length=255, null=True, verbose_name="Фамилия покупателя")

    def __str__(self):
        return f'{self.surname} {self.name}'


class Cart(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, blank=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False)
    transaction_id = models.CharField(max_length=100, null=True)
    products = models.ManyToManyField(Product, null=True, blank=True, default=None)

    def __str__(self):
        return str(self.customer)

    @property
    def cart_total(self):
        total = sum([product.price for product in self.products.all()])
        return total

    @property
    def cart_items(self):
        orderitems = self.products.all()
        total = len(self.products.all())
        return total

    def save(self, *args, **kwargs):
        self.transaction_id = random.randint(100000, 999999)
        super(Cart, self).save(*args, **kwargs)

