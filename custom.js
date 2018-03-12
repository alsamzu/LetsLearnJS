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
function linear_search(arr,value){
    for(i=0; i<arr.length;i++){
        if(value==arr[i]){
          return `Found ${arr[i]}`
            
        } }
        return -1;
   
}
Array=[5,7,8,9,2,1];
var isFound= linear_search(Array,8);
document.write(isFound);

