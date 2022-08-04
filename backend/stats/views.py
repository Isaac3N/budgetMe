from django.shortcuts import render
from rest_framework.views import APIView
import datetime
from expense.models import Expense
from rest_framework import status, response
from django.db.models import Sum
from income.models import Income


# Create your views here.


class ExpenseSummaryStats(APIView):

    def get_amount_for_category(self, expense_list, category):
        expenses = expense_list.filter(category=category)
        total_amount = expenses.aggregate(Sum("amount"))
        return(total_amount)

    def get_category(self, expense):
        return expense.category

    def get(self, request):
        todays_date = datetime.date.today()
        a_year_ago = todays_date-datetime.timedelta(days=30*12)
        expenses = Expense.objects.filter(
            owner=request.user, date__gte=a_year_ago, date__lte=todays_date)

        final = {}

        categories = list(set(map(self.get_category, expenses)))

        for expense in expenses:
            for category in categories:
                final[category] = self.get_amount_for_category(
                    expenses, category)

        return response.Response({"category_data": final}, status=status.HTTP_200_OK)


class IncomeSummaryStats(APIView):

    def get_amount_for_source(self, income_list, source):
        incomes = income_list.filter(source=source)
        total_amount = incomes.aggregate(Sum("amount"))
        return(total_amount)

    def get_source(self, income):
        return income.source

    def get(self, request):
        todays_date = datetime.date.today()
        a_year_ago = todays_date-datetime.timedelta(days=30*12)
        incomes = Income.objects.filter(
            owner=request.user, date__gte=a_year_ago, date__lte=todays_date)

        final = {}

        categories = list(set(map(self.get_source, incomes)))

        for income in incomes:
            for source in categories:
                final[source] = self.get_amount_for_source(
                    incomes, source)

        return response.Response({"source": final}, status=status.HTTP_200_OK)


class TotalIncomeStats(APIView):
    def get(self, request):
        income = Income.objects.filter(owner=request.user)
        total_amount = income.aggregate(Sum("amount"))
        return response.Response(total_amount)


class TotalExpenseStats(APIView):
    def get(self, request):
        expenses = Expense.objects.filter(owner=request.user)
        total_amount = expenses.aggregate(Sum("amount"))
        return response.Response(total_amount)
