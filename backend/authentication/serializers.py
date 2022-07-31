from enum import unique
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=65, min_length=6, write_only=True)
    email = serializers.EmailField(max_length=255, min_length=4)
    username = serializers.CharField(
        max_length=255, min_length=2)

    class Meta:
        model = User
        fields = ['username', 'email', 'password'
                  ]

    def validate(self, attrs):
        email = attrs.get('email')
        username = attrs.get("username")
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                {'email': ('Email is already in use')})
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError(
                {"username": (
                    "Hey! looks like this username is taken. Please try another ")}
            )
        return super().validate(attrs)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=65, min_length=6, write_only=True)
    username = serializers.CharField(max_length=255, min_length=2)

    class Meta:
        model = User
        fields = ['username', 'password']
