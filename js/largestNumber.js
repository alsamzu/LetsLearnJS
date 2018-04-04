
function maxNum(){
    maxArr=[];
    for(i=0;i<3;i++){
       var num= maxArr.push(prompt("Enter a number")); 
        for(j=0;j<maxArr.length;j++){
            var length=0;
            if(length<maxArr[j]){
                length=maxArr[j];
            }
        }
         
    }
   
    
    
  document.write(length+" ");
    document.write(maxArr);
    
   
}
 
maxNum();