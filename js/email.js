
function mail(){
    var a = prompt("Enter an email address");
    var b = a.includes("@");
    if (b == true){
        alert("This is an email address");
    }
    else{
        alert("This is not an email address");
    }
}
mail();