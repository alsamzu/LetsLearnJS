//function maxNum(){
//    maxArr=[];
//    for(i=0;i<3;i++){
//       var num= maxArr.push(prompt("Enter a number")); 
//        for(j=0;j<maxArr.length;j++){
//            var length=0;
//            if(length<maxArr[j]){
//                length=maxArr[j];
//            }
//        }
//         
//    }
//   
//    
//    
//  document.write(length);
//    document.write(maxArr);
//    
//   
//}
// 
//maxNum();
//function maX(){
//    var a= prompt("Enter the first number");
//     var b= prompt("Enter the second number");
//     var c= prompt("Enter the third number");
//    var d= prompt("Enter the forth number");
//    var e= prompt("Enter the five number");
//  var f=  Math.max(a,b,c,d,e);
//    alert("You entered "+"\n"+a+"\n"+b+"\n"+c+"\n"+d+"\n"+e+"\n"+"The largest number is "+f);
//}
//maX();
function d() {
    maxarr = [];
    for (i = 0; i < 3; i++) {
        var num = maxarr.push(prompt("Enter a number"));

    }
    var c = 0;
    for (j = 0; j < maxarr.length; j++) {

        if (maxarr[j] > c) {
            c = maxarr[j];
        }
    }
    alert("Your Entry is " + maxarr + "\n" + " The Largest number is " + c);


}
d();
