// 5. Make a BankAccount class with deposit and withdraw methods, and show

class BankAccount{
    constructor(initialBalance = 0){
        this.balance = initialBalance;
    };

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited: ${amount}. Current balance: ${this.balance}`);
    }

    withdraw(amount){
        if(amount > this.balance){
            console.log(`Insufficient balance. Current balance: ${this.balance}`)
        }else{
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}. Current balance: ${this.balance}`);
        }
    }
};


// Example usage:
const account = new BankAccount(100); // initial balance = 100
account.deposit(50);    // Deposited: 50. Current balance: 150
account.withdraw(30);   // Withdrawn: 30. Current balance: 120
account.withdraw(200);  // Insufficient balance. Current balance: 120