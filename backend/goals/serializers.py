from rest_framework.serializers import ModelSerializer
from .models import Goal


class GoalSerializer(ModelSerializer):
    class Meta:
        model = Goal
        fields = ["id", "goal", "completed", ]
