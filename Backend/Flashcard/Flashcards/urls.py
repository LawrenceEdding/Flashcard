from django.urls import path
from . import views


urlpatterns = [
    path('<int:pk>/', views.FlashcardDetail.as_view()),
    path('', views.FlashcardList.as_view())
    ]
