from rest_framework import viewsets, permissions

from .models import Record, Buyer, Sku
from .serializers import RecordSerializer, BuyerSerializer, SkuSerializer


class RecordViewSet(viewsets.ModelViewSet):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    permission_classes = [permissions.IsAuthenticated]


class BuyerViewSet(viewsets.ModelViewSet):
    queryset = Buyer.objects.all()
    serializer_class = BuyerSerializer
    permission_classes = [permissions.IsAuthenticated]


class SkuViewSet(viewsets.ModelViewSet):
    queryset = Sku.objects.all()
    serializer_class = SkuSerializer
    permission_classes = [permissions.IsAuthenticated]
