//function loopie(){
//    var z = "";
//    for( i=7; i>=1; i--){
//     for( j=1; j<=i; j++){
//         z += "#";
//     }
//      z +="\n";
//    }
//   console.log(z);
//}
//
//loopie();

function printie(){
var z = 0;
    for (i=1; i<100; i++){
        z++;

        if(z%3 === 0 && z%5===0 ){
            console.log("fizzBuzz");
        }
        else if(z%5 === 0){
            console.log("buzz");
        }
        else if (z%3===0 ){
            console.log("fizz");
        }
        else{

            console.log(z);
        }

    }

}
printie();
