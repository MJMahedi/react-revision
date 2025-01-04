console.log("Private Variable With Colsure");

function bankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit(amount) {
            balance += amount;
            console.log(`Your Deposit Amount is ${amount} Balance is ${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log('Insufficient Funds Because Withdraw amount Is bigger Than Current Balance');
            } else {
                balance -= amount;
                console.log(`Your Withdraw amount is ${amount} and Balance is ${balance}`);
            }
        },
        checkBalance() {
            console.log(`Current Balance: ${balance}`);
        },
        getInitialBalance() {
            // return `Initial Balance: ${initialBalance}`;
            console.log(`Initial Balance: ${initialBalance}`);
        }
    };
}

const MyBalanceIs = bankAccount(1000);
// console.log(MyBalanceIs.getInitialBalance());
MyBalanceIs.getInitialBalance();

MyBalanceIs.deposit(500);
MyBalanceIs.withdraw(250);
MyBalanceIs.checkBalance();
