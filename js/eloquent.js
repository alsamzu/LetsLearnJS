//program to calculate price of your phone purchase
//const SPENDING_THRESHOLD = 200;
//const TAX_RATE=0.00;
//const PHONE_PRICE = 99.99;
//const ACCESORY_PRICE = 9.99;
//
//var bank_balance = 303.91;
//var amount = 0;
//
//function calculateTax(amount){
//    return amount * TAX_RATE;
//}
//function formatAmount(amount){
//    return "$" + amount.toFixed(2);
//}
////keep buying phnes while you sstill have money
//while(amount < bank_balance){
//    //buy new phone
//    amount = amount + PHONE_PRICE;
//    //can we afford theaccessory?
//    if(amount<SPENDING_THRESHOLD){
//        amount = amount + ACCESORY_PRICE;
//    }
//
//}
////paying taxes
//amount = amount + calculateTax(amount);
//console.log(
//    "Your purchase: "+formatAmount(amount)
//);
//// Your purchase : $334.76
////can you actually afford this purchase
//if(amount > bank_balance){
//    console.log(
//        "You can't afford this purchase.  :("
//    );
//
//}

//Write a loop that makes seven calls to console.log to output the following triangle:#
//##
//###
//####
//#####
//######
//#######

//function tria(){
//  for(i="#";i.length<8;i+="#") {
//      console.log(i);
//  }
//}
//tria();

//FIZZBUZZ function
//function fizzbuzz(){
//    for(i=1;i<=100;i++){
//
//         if(i%3==0 && i%5==0){
//        document.write("    FizzBuzz ");
//    }
//        else if(i%5==0){
//        document.write(" buzz ");
//    }
//        else if(i%3==0){
//            document.write("fizz");
//        }
//        else{
//            document.write(" "+i+" ");
//        }
//    }
//
//
//
//}
//fizzbuzz();

//CHASEBOARD
var size = 8;
var board = "";
for(i=0;i<size;i++){
    for(j=0;j<size;j++){
        if((i+j)%2==0){
          board +=" ";
        }
        else{
            board +="#";
        }
    }
    board +="\n";
}
console.log(board);
//Write a function min that takes two arguments and returns their minimum.
//function mina(x,y){
////    if(x<y){
////        return x;
////    }
////    else{
////        return y;
////    }
//    Mayh(x,y);
//}
//document.write(mina(34,65));
console.log(Math.min(31,5));
//Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
function isEven(x){
    if((x-2)%2==0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
isEven(341);
