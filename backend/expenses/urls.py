from django.urls import path
from .views import ExpenseDetailAPIView, ExpenseListAPIView


urlpatterns = [
    path('', ExpenseListAPIView.as_view()),
    path('<int:id>', ExpenseDetailAPIView.as_view()),
]
