from django.contrib import admin
from main.models import *

admin.site.register(Cart)
admin.site.register(Customer)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'price', )
