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

//EXAMPLLE 2 LINEAR SEARCH
function findIndex(values, target) {
  for(var i = 0; i < values.length; ++i){
    if (values[i] == target) { return target; }
  }
  return -1;
}
var ans=findIndex([7, 3, 6, 1, 0], 4);
alert(ans);