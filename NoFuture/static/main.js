console.log("Why are you reading this?");


$(document).ready(function(){



  TweenMax.set("#arrow",{xPercent:-50, yPercent:-50,  transformOrigin:"center"});

  var motionPath = MorphSVGPlugin.pathDataToBezier('#line', {align:"#arrow"}) ;

  var Intro = new TimelineMax({repeat:3, repeatDelay:1})
  .from("#line", 4, {drawSVG:"0%", ease:Linear.easeNone})
  .to('#arrow', 4, {bezier:{values:motionPath, type:"cubic", autoRotate:true}, ease:Linear.easeNone},0)
  .to('#arrow',0.1,{fill:'green',stroke:'green',repeat:3});
    var xwing = function($xwing,speed){
    var beeWidth = $xwing.width();

$xwing.animate({ //animates the bee to the right side of the screen
    "left": "100%"
}, speed, function(){ //when finished it goes back to the left side
    $xwing.animate({
        "left": 0 - beeWidth + "px"
    }, speed, function(){
        xwing($xwing, speed) //finally it recalls the same function and everything starts again
    });
});
};

$(function(){ //document ready
    xwing($("#xwing"), 1000); //calls the function
});


  $('#explanation').click(function(){
    alert("Prime numbers are whole numbers greater than 1, that have only two factors – 1 and the number itself.")
  });

  $('#easy, #medium, #hard, #superhard').on('click', function (e){

    var el = $(e.currentTarget);
    var action = el.attr('id');

    var randomeasy =  Math.floor((Math.random() * 51) + 1);
    var randommedium =  Math.floor((Math.random() * 251) + 51);
    var randomhard =  Math.floor((Math.random() * 751) + 251);
    var randomsuperhard =  Math.floor((Math.random() * 1551) + 751);

    if (randommedium % 2 == 0){
      randommedium +=1
    }

    if (randomhard % 2 == 0){
      randomhard +=1
    }

    if (randomsuperhard % 2 == 0){
      randomsuperhard +=1
    }


    $('#easy').attr("disabled", true);
    $('#medium').attr("disabled", true);
    $('#hard').attr("disabled", true);
    $('#superhard').attr("disabled", true);

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

    $('#yes').attr("disabled", true);
    $('#no').attr("disabled", true);

    if (number == 2) {
        if(action =="yes"){
           $("#result").html("You are right, it is a prime number!");

        }else if(action == "no"){
           $("#result").html("You are wrong, it is a prime number!");


        }
    }else if(number == 1) {
        if(action =="yes"){
           $("#result").html("You are wrong, it is not a prime number!");


        }else if(action == "no"){
           $("#result").html("You are right, it is not a prime number!");

        }
    }

  	for (i = 2; i <= number - 1; i++) {
  			     if (number % i == 0) {
               if(action=="yes"){

                 if(number > 3 && number < 51){

                 }else if(number > 51 && number < 251){

                 }else if(number > 251 && number < 751){

                 }else if(number > 751 && number < 1551){

                 }
                 $("#result").html("You are wrong, it is not a prime number!");

              }else if (action =="no") {
                  if(number > 3 && number < 51){

                  }else if(number > 51 && number < 251){


                  }else if(number > 251 && number < 751){

                  }else if(number > 751 && number < 1551){

                  }

                 $("#result").html("You are right, it is not a prime number!");
              }
               break;
  				} else {
              if(action =="yes"){
                $("#result").html("You are right, it is a prime number!");
              }else if(action == "no"){
                $("#result").html("You are wrong, it is a prime number!");
        				}
        }
}

function calculate(number) {

    var half = Math.floor(number / 2),
        str = '1',
        i, j;

    number % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        number % i === 0 ? str += ',' + i : false;
    }

    str += ',' + number;
    console.log(str);
    $('#divisors').html("<br>Divisors: ")
    $('#divisors').append(str)


}

calculate(number);

$('#again').css('display', 'block');

$('#again').click(function(){
    $('#easy').attr("disabled", false);
    $('#medium').attr("disabled", false);
    $('#hard').attr("disabled", false);
    $('#superhard').attr("disabled", false);

    $('#yes').attr("disabled", false);
    $('#no').attr("disabled", false);

})


  });

});

});
