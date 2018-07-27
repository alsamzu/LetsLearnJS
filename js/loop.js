//Write a loop that makes seven calls to console.log to output the following
//triangle:

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



//Write a program that uses console.log to print all the numbers from 1 to 100,
//with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
//number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
//When you have that working, modify your program to print "FizzBuzz" , for
//numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
//for numbers divisible by only one of those).

//function printie(){
//var z = 0;
//    for (i=1; i<100; i++){
//        z++;
//
//        if(z%3 === 0 && z%5===0 ){
//            console.log("fizzBuzz");
//        }
//        else if(z%5 === 0){
//            console.log("buzz");
//        }
//        else if (z%3===0 ){
//            console.log("fizz");
//        }
//        else{
//
//            console.log(z);
//        }
//
//    }
//
//}
//printie();


//Write a program that creates a string that represents an 8×8 grid, using newline
//characters to separate lines. At each position of the grid there is either a space
//or a "#" character. The characters should form a chess board.

function chess() {
    var y = 8;
    var z = "";
    for (i = 0; i < y; i++) {
        for (j = 0; j < y; j++) {
            if ((i + j) % 2 == 0) {
                z += " ";
            } else {
                z += "#";
            }
        }
        z += "\n";
    }
    console.log(z);
}

chess();
