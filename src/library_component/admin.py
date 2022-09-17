from django.contrib import admin
from .models import Library_data


class Library_dataAdmin(admin.ModelAdmin):
    list_display= ('Book_id', "description", "create_date", "Book_title","Book_author","Status","Issued_to")



admin.site.register(Library_data, Library_dataAdmin)


# Register your models here.
