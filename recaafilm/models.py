from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save

# Create your models here.


class Customer(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True)
    favmovie = models.CharField(max_length=200, null=True)
    favgenre = models.CharField(max_length=200, null=True)
    profile_pic = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name


# def create_profile(sender, instance, created, **kwargs):

#     if created:
#         Customers.objects.create(user=instance)
#         print('Profile created!')


# post_save.connect(create_profile, sender=User)


# def update_profile(sender, instance, created, **kwargs):

#     if created == False:
#         instance.customers.save()
#         print('Profile updated!')


# post_save.connect(update_profile, sender=User)
