from django.shortcuts import render,reverse,redirect
from .models import Library_data 
from .serializers import BookLibrarySerializer
from rest_framework.response import Response
from rest_framework import status, generics







class BookView(generics.CreateAPIView):
    serializer_class = BookLibrarySerializer
    queryset = Library_data.objects.all()

    def post(self, request, format=None):
        serializer = BookLibrarySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        queryset = Library_data.objects.all()
        serializer = BookLibrarySerializer(queryset, many=True)
        return Response(serializer.data)



class BookRetrieveView(generics.CreateAPIView):
    serializer_class = BookLibrarySerializer
    queryset = Library_data.objects.all()
    def create(self, request, *args, **kwargs):
        queryset = Library_data.objects.filter(pk=kwargs['pk']).first()
        if queryset:
            serializer = self.serializer_class(queryset)
            return Response({"status": True, "data": serializer.data}, status=status.HTTP_200_OK)
        return Response({"status": False, "data": "Data not found"}, status=status.HTTP_404_NOT_FOUND)


class BookDetailUpdateView(generics.UpdateAPIView):
    serializer_class = BookLibrarySerializer
    def update(self, request, *args, **kwargs):
        queryset = Library_data.objects.filter(pk=kwargs['pk']).first()
        if queryset:
            serializer = self.serializer_class(queryset, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"status": True, "data": "Data updated successfully"}, status=status.HTTP_201_CREATED)
            return Response({"status": False, "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"status": False, "data": "Data not found"}, status=status.HTTP_404_NOT_FOUND)



class BookDetailDeleteView(generics.DestroyAPIView):
    serializer_class = BookLibrarySerializer
    def delete(self, request, *args, **kwargs):
        queryset = Library_data.objects.filter(pk=kwargs['pk']).first()
        if queryset:
            serializer = self.serializer_class(queryset, data=request.data, partial=True)
            if serializer.is_valid():
                queryset.delete()
                return Response({"status": True, "data": "Data deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            return Response({"status": False, "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"status": False, "data": "Data not found"}, status=status.HTTP_404_NOT_FOUND)










    
    

