from rest_framework import serializers

from .models import Record, Buyer, Sku


class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = [
            "id",
            "created_at", "updated_at",
            "status", "quantity", "total_price", "note",
            "buyer", "buyer_contact",
            "sku", "sku_price", "sku_icon",
        ]


class BuyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buyer
        fields = [
            "id",
            "created_at", "updated_at",
            "name", "contact",
        ]


class SkuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sku
        fields = [
            "id",
            "created_at", "updated_at",
            "name", "price", "icon",
        ]
