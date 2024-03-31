from django.contrib import admin
from .models import Note, Listing

# Register your models here.

# class DefaultUserAdmin(admin.ModelAdmin):
#     exclude = ('author','updated_by',)
#     def get_changeform_initial_data(self, request):
#         get_data = super(DefaultUserAdmin, self).get_changeform_initial_data(request)
#         get_data['author'] = request.user.pk
#         get_data['updated_by'] = request.user.pk
#         return get_data

admin.site.register(Note)
admin.site.register(Listing)