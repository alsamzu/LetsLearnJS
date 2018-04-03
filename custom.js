


//BINARY SEARCH EXAMPLE
//function findIndex(values, target) {
//  return binarySearch(values, target, 0, values.length - 1);
//};
//
//function binarySearch(values, target, start, end) {
//  if (start > end) { return -1; } //does not exist
//
//  var middle = Math.floor((start + end) / 2);
//  var value = values[middle];
//
//  if (value > target) { return binarySearch(values, target, start, middle-1); }
//  if (value < target) { return binarySearch(values, target, middle+1, end); }
//  return middle; //found!
//}
//var ans=findIndex([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 20);
//alert(ans);
//FUNCTION TO CHECK IF A NUMBER IS PRIME OR NOT
//function prime(){
//    var a=prompt("Enter a number to check if it is a prime number");
//    var count = 0;
//    for( x=1;x<=a; x++){
//        if(a % x == 0){
//            count++;
//        }
//    }
//    if(count==2){
//        alert(a+" is a prime number");
//    }
//    else{
//        alert(a+" is not a prime  number"+"\n A prime number is a whole number greater than 1 whose only factors are 1 and itself e.g 2,11,37");
//    }
//}
//prime();
// FACTORS

//ALERT DATE
//var currentDate = new Date();
//window.alert(currentDate);
//
//document.getElementById("output").innerHTML="Hey there";
//document.getElementById("output").style.color="red";
//TIP CALCULATOR

//MAXIMUM NUMBER
//function max(x,y){
//    if(x>y){
//        document.write(x+" is greater than "+y);
//    }
//    else{
//        document.write(y+" is greater than "+x);
//    }
//}
//max(15,5);

//function maX(){
//    var a= prompt("Enter the first number");
//     var b= prompt("Enter the second number");
//     var c= prompt("Enter the third number");
//  var d=  Math.max(a,b,c);
//    alert("You entered "+"\n"+a+"\n"+b+"\n"+c+"\n"+"The largest of the three numbers is "+d);
//}
//maX();
//function max(){
//    
//  
//    for(i=0;i<3;i++){
//        var a=prompt("Enter a number");
//    }
//
//   
//} 
//max();

//adding two numbers
function addd(){
    var a= prompt("Enter your first number");
    var b = prompt("Enter your second number");
    var c = prompt("Enter your third number");
    var d = prompt("Enter your forth number");
    
    var e = parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
    document.write("\n"+e);
}

addd();