from rest_framework import serializers
from .models import Expenditure


class ExpendituresSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expenditure
        fields = ['id', 'date', 'description', 'amount', 'category']
