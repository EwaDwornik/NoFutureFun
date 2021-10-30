console.log("Why are you reading this?");



$(document).ready(function(){

  $('#explanation').click(function(){
    alert("Prime numbers are whole numbers greater than 1, that have only two factors – 1 and the number itself.")
  });

  $('.carousel').carousel({
    interval: 2000
  });

  $('#easy, #medium, #hard, #superhard').on('click', function (e){

    var el = $(e.currentTarget);
    var action = el.attr('id');

    var randomeasy =  Math.floor((Math.random() * 51) + 1);
    var randommedium =  Math.floor((Math.random() * 251) + 51);
    var randomhard =  Math.floor((Math.random() * 751) + 251);
    var randomsuperhard =  Math.floor((Math.random() * 1551) + 751);


    if(action =="easy"){
      console.log("easy")
      $('#leveltype').html("<br>You chose an easy level.<br><br> Is it a prime number?<br><br>")
      console.log(randomeasy)
      $('#leveltype').append(randomeasy)

      $('#yesorno').css('display', 'block');
      var number = randomeasy


    }else if(action=="medium"){
      console.log("medium")
      $('#leveltype').html("<br>You chose a medium level.<br><br> Is it a prime number?<br><br>")
      console.log(randommedium)
      $('#leveltype').append(randommedium)
      var number = randommedium


    }else if(action =="hard"){
      console.log("hard")
      $('#leveltype').html("<br>You chose a hard level.<br><br> Is it a prime number?<br><br>")
      console.log(randomhard)
      $('#leveltype').append(randomhard)
      var number = randomhard


    }else if(action=="superhard"){
      console.log("superhard")
      $('#leveltype').html("<br>You chose a super hard level.<br><br> Is it a prime number?<br><br>")
      console.log(randomsuperhard)
      $('#leveltype').append(randomsuperhard)
      var number = randomsuperhard

    }
  $('#yesorno').css('display', 'block');

  $('#yes, #no').on('click', function (e){

    var el = $(e.currentTarget);
    var action = el.attr('id');


    if (number == 2) {
        if(action =="yes"){
           $("#result").html("You are right, it is a prime number!");
        }else if(action == "no"){
           $("#result").html("You are wrong, it is a prime number");
        }
    }else if(number == 1) {
        if(action =="yes"){
           $("#result").html("You are wrong, it is not a prime number!");
        }else if(action == "no"){
           $("#result").html("You are right, it is not a prime number");
        }
    }

  	for (i = 2; i <= number - 1; i++) {
  			     if (number % i == 0) {
               if(action=="yes"){
                 $("#result").html("You are wrong, it is not a prime number");

              }else if (action =="no") {
                 $("#result").html("Congratulations, it is not a prime number!");
              }
               break;
  				} else {
              if(action =="yes"){
                $("#result").html("Congratulations, it is a prime number!");
              }else if(action == "no"){
                $("#result").html("You are wrong, it is a prime number");
        				}
        }
}

  });
  });

});
