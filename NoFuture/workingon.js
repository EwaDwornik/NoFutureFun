
let timeLeft = 60;
let timerInterval;
function startGame()
{

  nextQuestion();

  document.getElementById("startbtn").disabled = true;

  let timeDisplay = document.getElementById("timeDisplay");
  timeDisplay.hidden = false;
  timerInterval = setInterval(function(){
    timeLeft -=1;
    timeDisplay.innerHTML = "Time left:" + timeLeft;
    if (timeLeft ==0){
      clearInterval(timerInterval);
    }
  }, 1000)
}

function nextQuestion(){


}

  $('#easy, #medium, #hard, #superhard').on('click', function (e){

    var el = $(e.currentTarget);
    var action = el.attr('id');

    var randomeasy =  Math.floor((Math.random() * 3) + 1);
    var randommedium =  Math.floor((Math.random() * 251) + 51);
    var randomhard =  Math.floor((Math.random() * 751) + 251);
    var randomsuperhard =  Math.floor((Math.random() * 1551) + 751);

    let timeLeft = 60;
    let timerInterval;
    function startGame()
    {

      nextQuestion();

      document.getElementById("startbtn").disabled = true;

      let timeDisplay = document.getElementById("timeDisplay");
      timeDisplay.hidden = false;
      timerInterval = setInterval(function(){
        timeLeft -=1;
        timeDisplay.innerHTML = "Time left:" + timeLeft;
        if (timeLeft ==0){
          clearInterval(timerInterval);
        }
      }, 1000)

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
    var score = 0;

    if (number == 2) {
        if(action =="yes"){
           $("#result").html("You are right, it is a prime number!");
           score +=1;
           console.log(score)
        }else if(action == "no"){
           $("#result").html("You are wrong, it is a prime number");
           score -=1;
           console.log(score)
        }
    }else if(number == 1) {
        if(action =="yes"){
           $("#result").html("You are wrong, it is not a prime number!");
           score -=1;
           console.log(score)

        }else if(action == "no"){
           $("#result").html("You are right, it is not a prime number");
           score +=1;
           console.log(score)
        }
    }

  	for (i = 2; i <= number - 1; i++) {
  			     if (number % i == 0) {
               if(action=="yes"){

                 if(number > 3 && number < 51){
                   score -=1;
                   console.log(score)
                 }else if(number > 51 && number < 251){
                   score -=3;
                   console.log(score)

                 }else if(number > 251 && number < 751){
                   score -=5;
                   console.log(score)
                 }else if(number > 751 && number < 1551){
                   score -=7;
                 }
                 $("#result").html("You are wrong, it is not a prime number");

              }else if (action =="no") {
                  if(number > 3 && number < 51){
                    score +=1;
                    console.log(score)
                  }else if(number > 51 && number < 251){
                    score +=3;
                    console.log(score)

                  }else if(number > 251 && number < 751){
                    score +=5;
                    console.log(score)
                  }else if(number > 751 && number < 1551){
                    score +=7;
                  }

                 $("#result").html("You are right, it is not a prime number!");
              }
               break;
  				} else {
              if(action =="yes"){
                $("#result").html("You are right, it is a prime number!");
              }else if(action == "no"){
                $("#result").html("You are wrong, it is a prime number");
        				}
        }

}
  });$('#again').css('display', 'block');
  });
