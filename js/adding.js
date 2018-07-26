//FUNCTION TO ADD TWO NUMBERS WITHOUT USER INPUT
function add(x, y) {
    var z = document.write(x + y);

}
add(4, 5);
//adding two numbers with user input
function addd() {
    var a = prompt("Enter your first number");
    var b = prompt("Enter your second number");
    var c = parseInt(a) + parseInt(b);
    document.write("\n" + c);
}

addd();
//Adding more than two numbers
function addd() {
    var a = prompt("Enter your first number");
    var b = prompt("Enter your second number");
    var c = prompt("Enter your third number");
    var d = prompt("Enter your forth number");

    var e = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
    document.write("\n" + e);
}

addd();
