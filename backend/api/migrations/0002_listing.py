# Generated by Django 5.0.3 on 2024-03-31 14:29

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Listing",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=100)),
                ("addr_street", models.CharField(max_length=50)),
                ("addr_number", models.CharField(max_length=10)),
                ("addr_postcode", models.CharField(max_length=10)),
                ("addr_city", models.CharField(max_length=10)),
                ("addr_region", models.CharField(max_length=10)),
                ("addr_country", models.CharField(max_length=10)),
                ("lat", models.CharField(max_length=20)),
                ("lng", models.CharField(max_length=20)),
                ("desc", models.TextField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                (
                    "author",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="listings",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
