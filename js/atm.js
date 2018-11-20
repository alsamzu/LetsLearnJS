 pin = [1234, 5678, 9000];




 function atm() {

     for (a = 2; a >= 0; a--) {
         var pinchk = prompt("Enter your pin:");

         var pint = parseInt(pinchk);
         if (pint == pin[0] | pint == pin[1] | pint == pin[2]) {
             alert("Welcome to the system.\n Pleae select an option\n 1.Check Balance \n 2.Deposit Cash \n 3.Withdraw Cash");
             break;
         } else {
             alert("Incorrect pin.Please try again. You have " + a + " attempts left");
         }


     }






 }
 atm();
