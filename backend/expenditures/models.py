from django.db import models
from authentication.models import User


# Create your models here.


class Expenditure(models.Model):

    CATEGORY_OPTIONS = [
        ('ONLINE_SERVICES', 'ONLINE_SERVICES'),
        ('TRAVEL', 'TRAVEL'),
        ('FOOD', 'FOOD'),
        ('RENT', 'RENT'),
        ('ENTERTAINMENT', 'ENTERTAINMENT'),
        ('OTHERS', 'OTHERS')
    ]

    category = models.CharField(choices=CATEGORY_OPTIONS, max_length=255)
    others = models.CharField(max_length=155, blank=True, null=True)
    amount = models.DecimalField(
        max_digits=10, decimal_places=2, max_length=255)
    description = models.TextField()
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
    date = models.DateField(null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering: ['-updated_at']

    def __str__(self):
        return str(self.owner)+'s income'
