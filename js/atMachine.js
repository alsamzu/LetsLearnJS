function atm() {
    for (i = 2; i >= 0; i--) {
        var pin = prompt("Enter your pin");
        if (pin == 1234) {
            alert("Welcome to our ATM system\n 1.Check Balance\n 2.Withdrawal\n 3.Deposit\n");
            balance == 20000;
            var proceed = prompt("Enter the number");
            if (proceed == 1) {
                alert("Your balance is " + balance);
            } else if (proceed == 2) {
                amount = prompt("Enter amount");
                if (amount > balance) {
                    alert("you have insufficient amount");
                } else if (amount <= balance) {
                    alert("You have withdrawn " + amount);
                }
            } else if (proceed == 3) {
                dep = prompt("Enter the amount");
                var Deposit = parseInt(dep) + parseint(balance);
                alert("you have deposited " + Deposit + " your balance is " + Deposit);
            }
            break;
        } else {
            alert("Sorry you have " + i + " attempts left");
        }

    }
}
atm();
