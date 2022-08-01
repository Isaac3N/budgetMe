from django.urls import path
from .views import GoalDetailView, GoalList


urlpatterns = [
    path('', GoalList.as_view(), name='goals'),
    path('<int:id>', GoalDetailView.as_view(), name="goal"),
]
