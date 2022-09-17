from django.urls import path
from .views import BookView,BookRetrieveView,BookDetailUpdateView,BookDetailDeleteView

urlpatterns = [
    path('',BookView.as_view(),name="add_book"),
    path('book/get-detail/<int:pk>', BookRetrieveView.as_view(), name="get_detail"),
    path('book/update-detail/<int:pk>', BookDetailUpdateView.as_view(), name="update_detail"),
     path('book/delete-detail/<int:pk>', BookDetailDeleteView.as_view(), name="delete"),
    
   
]
