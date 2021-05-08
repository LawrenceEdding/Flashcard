from django.urls import path
from . import views


urlpatterns = [
    path('<int:pk>/', views.CollectionDetail.as_view()),
    path('', views.CollectionList.as_view())
]
