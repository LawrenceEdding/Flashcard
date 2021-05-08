from .models import Flashcard
from .serializer import FlashcardSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


# Create your views here.
class FlashcardList(APIView):

    def get(self, request, collection):
        flashcard = Flashcard.objects.filter(collection=collection)
        serializer = FlashcardSerializer(flashcard, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, collection):
        serializer = FlashcardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FlashcardDetail(APIView):

    def get(self, request, pk, collection):
        reply = self.get_object(pk=pk,)
        serializer = FlashcardSerializer(reply)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, collection):
        flashcard = self.get_object(pk,)
        serializer = FlashcardSerializer(data=request.data, instance=flashcard)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, collection):
        flashcard = self.get_object((pk,))
        flashcard.delete()
        if not flashcard:
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def get_object(self, pk):
        try:
            return Flashcard.objects.get(pk=pk)
        except Flashcard.DoesNotExist:
            raise Http404
