from django.db import models

NULLABLE = {
    "null": True,
    "blank": True,
}
DECIMAL_LIMITATION = {
    "max_digits": 10,
    "decimal_places": 2,
}


class Record(models.Model):
    STATUS_CHOICES = (
        ("new", "new order"),
        ("sent", "order sent out"),
        ("paid", "order was purchased"),
        ("finished", "order was finished"),
    )

    class Meta:
        ordering = ["-updated_at", "-created_at"]

    def __str__(self):
        return "{} ordered {} at {}".format(self.buyer, self.sku, self.created_at)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default="new")
    quantity = models.IntegerField(**NULLABLE)
    total_price = models.DecimalField(**DECIMAL_LIMITATION, **NULLABLE)
    note = models.CharField(max_length=1024, **NULLABLE)

    # client
    buyer = models.CharField(max_length=1024)
    buyer_contact = models.CharField(max_length=128, **NULLABLE)

    # sku
    sku = models.CharField(max_length=1024)
    sku_price = models.DecimalField(**DECIMAL_LIMITATION, **NULLABLE)
    sku_icon = models.CharField(max_length=1024, **NULLABLE)

    # store
    store = models.CharField(max_length=1024, **NULLABLE)
    store_icon = models.CharField(max_length=1024, **NULLABLE)

    # post company
    post_company = models.CharField(max_length=1024, **NULLABLE)
    post_track_number = models.CharField(max_length=1024, **NULLABLE)


class Buyer(models.Model):
    class Meta:
        ordering = ["-updated_at", "-created_at"]

    def __str__(self):
        return self.name

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    name = models.CharField(max_length=1024)
    contact = models.CharField(max_length=128, **NULLABLE)


class Sku(models.Model):
    class Meta:
        ordering = ["-updated_at", "-created_at"]

    def __str__(self):
        return self.name

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    name = models.CharField(max_length=1024)
    price = models.DecimalField(**DECIMAL_LIMITATION, **NULLABLE)
    icon = models.CharField(max_length=1024, **NULLABLE)


class Store(models.Model):
    class Meta:
        ordering = ["-updated_at", "-created_at"]

    def __str__(self):
        return self.name

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    name = models.CharField(max_length=1024)
    icon = models.CharField(max_length=1024, **NULLABLE)


class Post(models.Model):
    class Meta:
        ordering = ["-updated_at", "-created_at"]

    def __str__(self):
        return self.name

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    name = models.CharField(max_length=1024)
