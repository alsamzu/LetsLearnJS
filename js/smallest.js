//Given an array of integers your solution should find the smallest integer.
//This function is not working because count if a fixed number

//  function findSmallestInt(min) {
//var min=[];
//      for(x=0;x<5;x++){
//           var num = min.push(prompt("Enter a number"));
//      }
//
//      smallest=min[0];
//  for (i=0; i<min.length; i++){
//       if (min[i] < smallest) {
//        smallest = min[i];
//      }
//  }
//  document.write(smallest);
//  }
//
//findSmallestInt();

function d(){
    minarr=[];
    for(i=0;i<6;i++){
        var num=minarr.push(prompt("Enter a number"));

    }
//     var c = Number.POSITIVE_INFINITY;
//    for(j=0;j<minarr.length;j++){
//
//        if(minarr[j]<=c){
//            c = minarr[j];
//        }
//    }

    var c = Math.min(...minarr);
    alert("Your Entry is "+minarr+"\n"+" The Smallest number is "+c);



}
d();


