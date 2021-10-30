
$('#yes, #no').on('click', function (e){

  var el = $(e.currentTarget);
  var action = el.attr('id');

if (number == 2) {
  if(action =="yes"){
     $("#result").html("Congratulations, it is a prime number!");
  }else if(action == "no"){
    $("#result").html("You are wrong, it is a prime number");
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


   $("#btn").click(function() {
   				var number = $("#num").val();
   				output = "";
   				if (number == 1 || number == 2) {
   					$("#result").html("it's  a prime number");
   					return;
   				}

   				for (i = 2; i <= number - 1; i++) {
   					if (number % i == 0) {
   						output = "it's not a prime number";
   						break;
   					} else {
   						output = "it's  a prime number";
   					}
   				}
   				$("#result").html(output);
   			});
