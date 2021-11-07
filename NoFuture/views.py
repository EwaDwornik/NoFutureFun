from django.views import generic
from django.views.generic import TemplateView, View, RedirectView
from django.shortcuts import render, reverse, redirect, HttpResponseRedirect, Http404, HttpResponse
from .forms import Primes2Form
from django.shortcuts import render
from django_user_agents.utils import get_user_agent


def my_view(request):

    # Let's assume that the visitor uses an iPhone...
    request.user_agent.is_mobile # returns True
    request.user_agent.is_tablet # returns False
    request.user_agent.is_touch_capable # returns True
    request.user_agent.is_pc # returns False
    request.user_agent.is_bot # returns False

    # Accessing user agent's browser attributes
    request.user_agent.browser  # returns Browser(family=u'Mobile Safari', version=(5, 1), version_string='5.1')
    request.user_agent.browser.family  # returns 'Mobile Safari'
    request.user_agent.browser.version  # returns (5, 1)
    request.user_agent.browser.version_string   # returns '5.1'

    # Operating System properties
    request.user_agent.os  # returns OperatingSystem(family=u'iOS', version=(5, 1), version_string='5.1')
    request.user_agent.os.family  # returns 'iOS'
    request.user_agent.os.version  # returns (5, 1)
    request.user_agent.os.version_string  # returns '5.1'

    # Device properties
    request.user_agent.device  # returns Device(family='iPhone')
    request.user_agent.device.family  # returns 'iPhone'


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
