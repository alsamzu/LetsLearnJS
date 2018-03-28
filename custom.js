//Adding two numbers without user input
//function add(x,y){
//    var z = document.write(x+y);
//    
//}
//add(4,5);
////adding two numbers
//function addd(){
//    var a= prompt("Enter your first number");
//    var b = prompt("Enter your second number");
//    var c = parseInt(a)+parseInt(b);
//    document.write("\n"+c);
//}
//
//addd();
//LINE SEARCH ALGORITHM
//function linear_search(arr,value){
//    for(i=0; i<arr.length;i++){
//        if(value==arr[i]){
//          return `Found ${arr[i]}`
//            
//        } }
//        return -1;
//   
//}
//Array=[5,7,8,9,2,1];
//var isFound= linear_search(Array,8);
//document.write(isFound);

//EXAMPLLE 2 LINEAR SEARCH
//function findIndex(values, target) {
//  for(var i = 0; i < values.length; ++i){
//    if (values[i] == target) { return target; }
//  }
//  return -1;
//}
//var ans=findIndex([7, 3, 6, 1, 0], 4);
//alert(ans);
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

function maX(){
    var a= prompt("Enter the first number");
     var b= prompt("Enter the second number");
     var c= prompt("Enter the third number");
  var d=  Math.max(a,b,c);
    alert("You entered "+"\n"+a+"\n"+b+"\n"+c+"\n"+"The largest of the three numbers is "+d);
}
maX();
