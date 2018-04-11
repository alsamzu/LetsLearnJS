// NTH CHARACTER IN A STRING
function nth(){
  var x = prompt("Enter a String to find the third character ");
    if(x.length>3){
      var y =x[2];
    document.write("The third character is "+y);   
    }
    else{
        document.write("Please enter a string that has more than 3 characters :)")
    }
   
}
nth();