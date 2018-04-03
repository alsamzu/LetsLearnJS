//LINE SEARCH ALGORITHM EXAMPLE
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
