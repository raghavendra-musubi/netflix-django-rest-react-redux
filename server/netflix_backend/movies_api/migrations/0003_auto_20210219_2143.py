# Generated by Django 3.1.6 on 2021-02-19 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies_api', '0002_auto_20210219_1954'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='category_id',
            field=models.PositiveSmallIntegerField(choices=[(1, 'Adventure'), (2, 'Action'), (3, 'Thriller'), (4, 'Horror'), (5, 'Comedy'), (6, 'Musical'), (7, 'Romance')]),
        ),
    ]
