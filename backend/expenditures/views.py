from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .serializers import ExpendituresSerializer
from .models import Expenditure
from rest_framework import permissions
from .permissions import IsOwner


class ExpenditureListAPIView(ListCreateAPIView):
    serializer_class = ExpendituresSerializer
    queryset = Expenditure.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)

    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)


class ExpenditureDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = ExpendituresSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner,)
    queryset = Expenditure.objects.all()
    lookup_field = "id"

    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)
