//MAXIMUM NUMBER
function max(x,y){
    if(x>y){
        document.write(x+" is greater than "+y);
    }
    else{
        document.write(y+" is greater than "+x);
    }
}
max(15,5);

function maX(){
    var a= prompt("Enter the first number");
     var b= prompt("Enter the second number");
     var c= prompt("Enter the third number");
  var d=  Math.max(a,b,c);
    alert("You entered "+"\n"+a+"\n"+b+"\n"+c+"\n"+"The largest of the three numbers is "+d);
}
maX();
function max(){
    
  
    for(i=0;i<3;i++){
        var a=prompt("Enter a number");
    }

   
} 
max();