from .views import IncomeSummaryStats, TotalExpenseStats, TotalIncomeStats, ExpenseSummaryStats
from django.urls import path

urlpatterns = [
    path("expense_category_data/", ExpenseSummaryStats.as_view(),
         name="expense-category-summary"),

    path("income_source_data/", IncomeSummaryStats.as_view(),
         name="income-source-summary"),

    path("total-expense/", TotalExpenseStats.as_view(),
         name="total-expenses-stats"),

    path("total-income/", TotalIncomeStats.as_view(),
         name="total-income-stats"),

]
