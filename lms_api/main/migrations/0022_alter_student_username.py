# Generated by Django 5.0.6 on 2024-05-26 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0021_student_profile_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='username',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
