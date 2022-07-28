from django.urls import path
from . import views


urlpatterns = [
    path('', views.ExpenditureListAPIView.as_view(), name="expenditures"),
    path('<int:id>', views.ExpenditureDetailAPIView.as_view(), name="expenditure"),
]
