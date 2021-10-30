from django.views import generic
from django.views.generic import TemplateView, View, RedirectView
from django.shortcuts import render, reverse, redirect, HttpResponseRedirect
from .forms import Primes2Form


class HomePage(TemplateView):
    """
    Front page, showing what you can do on this website.
    """
    template_name = 'HomePage.html'


class ContactView(TemplateView):
    template_name = 'contact.html'


class YogaView(TemplateView):
    """
    Front page, showing what you can do on this website.
    """
    template_name = 'yoga.html'


class MusicView(TemplateView):
    template_name = 'music.html'


class Primes2View(View):
    """
    Showing all prime numbers between two numbers.
    """

    def get(self, request, *args, **kwargs):
        form3 = Primes2Form()
        context = {'form3': form3}
        return render(request, 'primes2.html', context)

    def post(self, request, *args, **kwargs):
        form3 = Primes2Form(data=request.POST)
        if form3.is_valid():
            number2 = form3.cleaned_data['number2']
            number3 = form3.cleaned_data['number3']
            lst = []
            for num in range(number2, number3 + 1):
                if num > 1:
                    for i in range(2, num):
                        if (num % i) == 0:
                            break
                    else:
                        lst.append(num)

            return render(request,
                          'primes2.html',
                          {"number2": number2,
                           "number3": number3,
                           "lst": lst,
                           'form3': form3},
                          )
        else:
            return render(request,
                          'primes2.html',
                          {'form3': form3}, )


class ProgrammingView(TemplateView):
    template_name = 'programming.html'


class KnittingView(TemplateView):
    template_name = 'knitting.html'

class GameView(TemplateView):
    template_name = 'game.html'
