// LINEAR SEARCH

function linear (arr,value){
   for (i=0; i<arr.length; i++){
       if(value == arr[i]){
           return "Found";
       }

   }
    return "Sorry";
}
arr = [3,4,5,6,7,8,9];
var s = linear(arr,7);
document.write(s)
