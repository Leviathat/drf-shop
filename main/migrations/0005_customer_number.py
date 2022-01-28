# Generated by Django 4.0.1 on 2022-01-27 06:46

from django.db import migrations
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_remove_customer_user_alter_product_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='number',
            field=phonenumber_field.modelfields.PhoneNumberField(default=None, max_length=128, region=None, unique=True),
        ),
    ]