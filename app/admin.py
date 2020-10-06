from django.contrib import admin

from .models import Record, Buyer, Sku


class RecordAdmin(admin.ModelAdmin):
    list_diaplay = (
        "id",
        "created_at", "updated_at",
        "status", "quantity", "total_price", "note",
        "buyer", "buyer_contact",
        "sku", "sku_price", "sku_icon",
    )
    list_filter = (
        "buyer", "sku",
    )


admin.site.register(Record, RecordAdmin)


class BuyerAdmin(admin.ModelAdmin):
    list_diaplay = (
        "id",
        "created_at", "updated_at",
        "name", "contact",
    )
    list_filter = (
        "name", "contact",
    )


admin.site.register(Buyer, BuyerAdmin)


class SkuAdmin(admin.ModelAdmin):
    list_diaplay = (
        "id",
        "created_at", "updated_at",
        "name", "price", "icon",
    )
    list_filter = (
        "name", "price",
    )


admin.site.register(Sku, SkuAdmin)
