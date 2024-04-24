from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import generics, permissions
from .serializers import TeacherSerializer, CategorySerializer, CourseSerializer
from . import models
# Create your views here.

# class TeacherList(APIView):
#     def get(self,request):
#         teachers=models.Teacher.objects.all()
#         serializer = TeacherSerializer(teachers, many=True)
#         return Response(serializer.data)
#     def post(self, request):
#             # Create a new teacher object based on request data
#             serializer = TeacherSerializer(data=request.data)
#             if serializer.is_valid():
#                 serializer.save()  # Saves the new teacher object to the database
#                 return Response(serializer.data, status=201)  # Created status code
#             return Response(serializer.errors, status=400)  # Bad request status code

class TeacherList(generics.ListCreateAPIView):
    queryset= models.Teacher.objects.all()
    serializer_class=TeacherSerializer
    # permission_classes=[permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset= models.Teacher.objects.all()
    serializer_class=TeacherSerializer
    # permission_classes=[permissions.IsAuthenticated]

@csrf_exempt
def teacher_login(request):
    email=request.POST['email']
    password=request.POST['password']
    teacherData=models.Teacher.objects.get(email=email,password=password)
    if teacherData:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})
    
class CategoryList(generics.ListCreateAPIView):
    queryset= models.CourseCategory.objects.all()
    serializer_class=CategorySerializer

#Course
class CourseList(generics.ListCreateAPIView):
    queryset= models.Course.objects.all()
    serializer_class=CourseSerializer

#Specific Teacher Courses
class TeacherCourseList(generics.ListAPIView):
    serializer_class=CourseSerializer

    def get_queryset(self):
        teacher_id=self.kwargs['teacher_id']
        teacher=models.Teacher.objects.get(pk=teacher_id)
        return models.Course.objects.filter(teacher=teacher)
    