from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save




class User(AbstractUser):
    is_organisor = models.BooleanField(default=True)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class Library_data(models.Model):
    Book_id=models.CharField(max_length=50)
    description = models.CharField(max_length=150)
    create_date=models.DateTimeField(null=True, blank=True)
    Book_title=models.CharField(max_length=100)
    Book_author=models.CharField(max_length=150)
    Status=models.CharField(max_length=100)
    Issued_to=models.CharField(max_length=100)
    class Meta:
        ordering = ['create_date',]



    def __str__(self):
        return f"{self.Book_title} {self.Book_author}"

    
def post_user_created_signal(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)


post_save.connect(post_user_created_signal, sender=User)


