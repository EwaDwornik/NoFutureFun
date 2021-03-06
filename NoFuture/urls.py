"""NoFuture URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.HomePage.as_view(), name="home"),
    path('contact/', views.ContactView.as_view(), name="contact"),
    path('yoga/', views.YogaView.as_view(), name="yoga"),
    path('shop/', views.ShopView.as_view(), name="shop"),
    path('music/', views.MusicView.as_view(), name="music"),
    path('calculator/', views.Primes2View.as_view(), name="calculator"),
    path('programming/', views.ProgrammingView.as_view(), name="programming"),
    path('knitting/', views.KnittingView.as_view(), name="knitting"),
    path('game/', views.GameView.as_view(), name="knitting"),

]
