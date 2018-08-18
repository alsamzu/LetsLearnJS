function mail() {
    var a = prompt("Enter an email address");
    //    THIS WORKS FINE
    //    var re = /\S+@\S+\.\S+/;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var c = re.test(a);


    //     var b = a.includes("@" && ".");
    //
    if (c == true) {

        alert("This is a valid email address");
    } else {
        alert("This is not a valid email address");
    }


}
mail();
