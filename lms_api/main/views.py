from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, permissions
from .serializers import TeacherSerializer
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
    permission_classes=[permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset= models.Teacher.objects.all()
    serializer_class=TeacherSerializer
    permission_classes=[permissions.IsAuthenticated]