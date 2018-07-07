//Given an array of integers your solution should find the smallest integer.

  function findSmallestInt(min) {

      smallest=0;
  for (i=0; i<min.length; i++){
       if (min[i] < smallest) {
        smallest = min[i];
      }
  }
  document.write(smallest);
  }

findSmallestInt([23,54,1,34,6,78,6,2]);

//function d(){
//    minarr=[];
//    for(i=0;i<3;i++){
//        var num=minarr.push(prompt("Enter a number"));
//
//    }
//     var c = Number.POSITIVE_INFINITY; ;
//    for(j=0;j<minarr.length;j++){
//
//        if(minarr[j]<c){
//            c = minarr[j];
//        }
//    }
//    alert("Your Entry is "+minarr+"\n"+" The Largest number is "+c);
//
//
//}
//d();


