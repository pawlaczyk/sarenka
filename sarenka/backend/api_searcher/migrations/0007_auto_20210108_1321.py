# Generated by Django 3.1.4 on 2021-01-08 12:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api_searcher', '0006_censyscredentailsmodel_shodancredentailsmodel'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='CensysCredentailsModel',
            new_name='CensysCredentialsModel',
        ),
        migrations.RenameModel(
            old_name='ShodanCredentailsModel',
            new_name='ShodanCredentialsModel',
        ),
    ]
