# Generated by Django 3.2.25 on 2024-05-02 16:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_chapter_video_duration'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='qualification',
            new_name='username',
        ),
        migrations.RemoveField(
            model_name='student',
            name='address',
        ),
        migrations.RemoveField(
            model_name='student',
            name='mobile_no',
        ),
    ]