from django.contrib import admin
from django.urls import path, include

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="BudgetMe API",
        default_version='v1',
        description="The budget me web appp official api documentation",
        terms_of_service="https://opensource.org/licenses/MIT",
        contact=openapi.Contact(email="ndubuisisaac@gmail.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/auth/", include("authentication.urls")),
    path('api/expense/', include('expense.urls')),
    path('api/income/', include('income.urls')),
    path('api/goals/', include('goals.urls')),
    path("api/stats/", include("stats.urls")),


    path('', schema_view.with_ui('swagger',
                                 cache_timeout=0), name='schema-swagger-ui'),
    path("redoc", schema_view.with_ui('redoc',
                                      cache_timeout=0), name='schema-redoc'),
]
