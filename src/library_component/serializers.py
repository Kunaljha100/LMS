from datetime import datetime, date

from rest_framework import serializers
from library_component.models import Library_data


class BookLibrarySerializer(serializers.ModelSerializer):

    class Meta:
        model = Library_data
        fields = ('id','Book_id', "description", "create_date", "Book_title","Book_author","Status","Issued_to")

