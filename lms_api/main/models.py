from django.db import models
import moviepy.editor
from django.core import serializers

# Create your models here.

#Teacher Model
class Teacher(models.Model):
    full_name=models.CharField(max_length=100)
    detail=models.TextField(null=True)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    qualification=models.CharField(max_length=200)
    mobile_no=models.CharField(max_length=20)
    skills=models.TextField()
    class Meta:
        verbose_name_plural="1. Teachers"

#CourseCategory Model
class CourseCategory(models.Model):
    title=models.CharField(max_length=150)
    description=models.TextField()

    class Meta:
        verbose_name_plural="2. Course Categories"

    def __str__(self):
        return self.title

#Course Model
class Course(models.Model):
    category=models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='teacher_courses')
    title=models.CharField(max_length=150)
    description=models.TextField()
    featured_img=models.ImageField(upload_to='course_imgs/', null=True)
    techs=models.TextField(null=True)
    class Meta:
        verbose_name_plural="3. Courses"
    def related_videos(self):
        related_videos=Course.objects.filter(techs__icontains=self.techs)
        return serializers.serialize('json',related_videos)

#Chapter Model
class Chapter(models.Model):
    course=models.ForeignKey(Course, on_delete=models.CASCADE,related_name='course_chapters')
    title=models.CharField(max_length=150)
    description=models.TextField()
    video=models.FileField(upload_to='chapter_videos/', null=True)
    remarks=models.TextField(null=True)
    class Meta:
        verbose_name_plural="4. Chapters"

#Student Model
class Student(models.Model):
    full_name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    qualification=models.CharField(max_length=200)
    mobile_no=models.CharField(max_length=20)
    address=models.TextField()
    interested_categories=models.TextField()
    class Meta:
        verbose_name_plural="5. Students"


