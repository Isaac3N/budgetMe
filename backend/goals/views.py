from cgitb import lookup
from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Goal
from .serializers import GoalSerializer
from rest_framework import permissions

# Create your views here.


class GoalList(ListCreateAPIView):
    serializer_class = GoalSerializer
    permissions_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        return Goal.objects.filter(owner=self.request.user)


class GoalDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = GoalSerializer
    permissions_classes = (permissions.IsAuthenticated,)
    lookup_field = "id"

    def get_queryset(self):
        return Goal.objects.filter(owner=self.request.user)
