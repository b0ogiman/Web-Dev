from django.urls import path
from . import views


urlpatterns = [
    path('companies/', views.get_companies),
    path('companies/<int:id>/', views.get_company),
    path('companies/<int:id>/vacancies/', views.get_vacancies_by_company),
    path('vacancies/', views.get_vacancies),
    path('vacancies/<int:id>/', views.get_vacancy),
    path('vacancies/top_ten/', views.get_vacancies_top_ten),
]

