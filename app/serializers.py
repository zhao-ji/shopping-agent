from rest_framework import serializers

from .models import Record, Buyer, Sku, Store, Post


class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = [
            "id",
            "created_at", "updated_at",
            "status", "quantity", "total_price", "note",
            "buyer", "buyer_contact",
            "sku", "sku_price", "sku_icon",
            "store", "store_icon",
            "post_company", "post_track_number",
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


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = [
            "id",
            "created_at", "updated_at",
            "name", "icon",
        ]


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            "id",
            "created_at", "updated_at",
            "name",
        ]
