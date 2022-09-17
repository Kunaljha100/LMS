from django.shortcuts import render
import requests
from django.contrib import messages
from library_component.models import Library_data
from .form import ( 
   
    LibraryModelForm,
    LoginForm,
    CustomUserCreationForm,
    
)
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.shortcuts import render,reverse,redirect
import time
from django.views import generic
from django.contrib.auth import login, authenticate  # add to imports
# Create your views here.

class SignupView(generic.CreateView):
    template_name = "registration/signup.html"
    form_class = CustomUserCreationForm

    def get_success_url(self):
        return reverse("login")
def login_page(request):
    
    form_class=LoginForm
    
    message = ''
    form=LoginForm
    if request.method == 'POST':
        form = form_class(request.POST)
        
        if form.is_valid():
            user = authenticate(
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password'],
            )
            if user is not None:
                login(request, user)
                message = 'Hello {user.username}! You have been logged in'
                return redirect("/home")
            else:
                message = 'Login failed!'
    return render(request, 'registration/login.html', context={ 'message': message,'form':form})

@login_required
def index(request):
    response=requests.get('http://127.0.0.1:8000/api').json()
    print("Response :",response)
    return render(request,'books/book_list.html',{'response':response})



def home(request):
    response=Library_data.objects.all()
    
    print("Response :",response)
    return render(request,'books/book_list_student.html',{'response':response})




def book_detail(request, pk):
    book = Library_data.objects.get(id=pk)
    context = {
        "book": book
    }
    return render(request, "books/book_detail.html", context)
# Create your views here.

def create_view(request,):
    
    context ={}
    form = LibraryModelForm(request.POST or None)
    if form.is_valid():
        form.save()
        messages.info(request, "You have successfully Added book")
        return redirect("/")
    context['form']= form
    return render(request, "books/book_create.html", context)



def update_view(request, pk):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # fetch the object related to passed id
    book_data = Library_data.objects.get(id = pk)
 
    # pass the object as instance in form
    form = LibraryModelForm(request.POST or None, instance = book_data)
 
    # save the data from the form and
    # redirect to detail_view
    if form.is_valid():
        form.save()
        messages.info(request, "You have successfully updated book")
        return redirect("/")
        
 
    # add form dictionary to context
    context["form"] = form
 
    return render(request, "books/book_update.html", context)




def delete_view(request, pk):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # fetch the object related to passed id
    book_data = Library_data.objects.get(id = pk)
 
 
    if request.method =="POST":
        
        book_data.delete()
        
        messages.info(request, "You have successfully deleted book")
        return redirect("/")

 
    return render(request, "books/book_delete.html", context)
