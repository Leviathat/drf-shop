from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import JsonResponse
import json
from main.models import *


class HomeView(TemplateView):
    template_name = "index.html"


class ArticleCartView(TemplateView):
    template_name = "article.html"


class OrderView(TemplateView):
    template_name = "make_order.html"


def get_cookie_cart(request):

    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    if body:
        return JsonResponse(f'{body}', safe=False)
    return JsonResponse('Your cart is empty', safe=False)


