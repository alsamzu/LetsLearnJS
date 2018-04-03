//FUNCTION TO CHECK IF A NUMBER IS PRIME OR NOT
function prime(){
    var a=prompt("Enter a number to check if it is a prime number");
    var count = 0;
    for( x=1;x<=a; x++){
        if(a % x == 0){
            count++;
        }
    }
    if(count==2){
        alert(a+" is a prime number");
    }
    else{
        alert(a+" is not a prime  number"+"\n A prime number is a whole number greater than 1 whose only factors are 1 and itself e.g 2,11,37");
    }
}
prime();