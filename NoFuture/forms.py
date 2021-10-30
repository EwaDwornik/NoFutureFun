from django import forms

from django.core.exceptions import ValidationError


class Primes2Form(forms.Form):
    number2 = forms.IntegerField()
    number3 = forms.IntegerField()

    def clean(self):
        cleaned_data = super().clean()
        number2 = cleaned_data.get("number2")
        number3 = cleaned_data.get("number3")

        if number2 >= number3:
            raise ValidationError(
                "Number 2 needs to be smaller than number3")
        elif number2 < 1 or number3 < 3:
            raise ValidationError(
                "Number 2 needs to be higher than 1 and number3 needs to be greater than 2"
            )
        elif number3 > 10001:
            raise ValidationError(
                "Number 3 needs to be smaller than 10001"
            )


