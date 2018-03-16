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
function findIndex(values, target) {
  return binarySearch(values, target, 0, values.length - 1);
};

function binarySearch(values, target, start, end) {
  if (start > end) { return -1; } //does not exist

  var middle = Math.floor((start + end) / 2);
  var value = values[middle];

  if (value > target) { return binarySearch(values, target, start, middle-1); }
  if (value < target) { return binarySearch(values, target, middle+1, end); }
  return middle; //found!
}
var ans=findIndex([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 20);
alert(ans);
