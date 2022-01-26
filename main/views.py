from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.http import JsonResponse
import json
from main.models import *


class HomeView(TemplateView):
    template_name = "index.html"


class ArticleCartView(TemplateView):
    template_name = "article.html"


def get_cookie_cart(request):
    print(request.POST['customer'])
    print(request.POST['phone_number'])
    # body_unicode = request.body.decode('utf-8')
    # body = json.loads(body_unicode)
    #
    # if body:
    #     return JsonResponse(f'{body}', safe=False)
    return redirect('home', permanent=True)


