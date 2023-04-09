from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.http import JsonResponse, HttpResponseRedirect
import json
from main.models import *
import random
import json


class HomeView(TemplateView):
    template_name = "index.html"


class ArticleCartView(TemplateView):
    template_name = "article.html"


def get_cookie_cart(request):
    customer_surname = request.POST['customer'].split(sep=' ')[0]
    customer_name = request.POST['customer'].split(sep=' ')[1]

    cookie_cart = json.loads(request.COOKIES['cart'])

    customer = Customer(name=customer_name, surname=customer_surname, number=request.POST['phone_number'])
    customer.save()
    cart = Cart(customer=customer, transaction_id=random.randint(10000, 99999))
    cart.save()

    for product_id in cookie_cart.keys():
        print(Product.objects.get(pk=product_id).name)
        cart.products.add(Product.objects.get(pk=product_id))

    response = HttpResponseRedirect('/cart')
    response.delete_cookie('cart')
    return response


# Ебать конечно
