function d() {
    checkarr = [];
    for (i = 0; i < 3; i++) {
        var num = checkarr.push(prompt("Enter a number"));

    }
    var check = 0;
    for (j = 0; j < checkarr.length; j++) {

        if (checkarr[j] > 6) {
            check++;
        }

    }
    if (check >= 1) {
        alert("Found a number greater than 6");
    } else {
        alert("All entries are less than 6");
    }



    //    alert("Your Entry is "+checkarr+"\n"+" The Largest number is "+c);


}
56
d();
