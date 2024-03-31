from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path("listings/", views.ListingListCreate.as_view(), name="listing-list"),
    path("listings/delete/<int:pk>/", views.ListingDelete.as_view(), name="delete-listing"),
]