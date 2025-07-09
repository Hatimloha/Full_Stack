let bankAccount = {
  balance: 1000,

  deposit(deposit_amt) {
    this.balance += deposit_amt;
    console.log(`₹${deposit_amt} has been deposited. New balance: ₹${this.balance}`);
  },

  withdraw(withdraw_amt) {
    if (withdraw_amt > this.balance) {
      console.log("Insufficient balance!");
    } else {
      this.balance -= withdraw_amt;
      console.log(`₹${withdraw_amt} has been withdrawn. Remaining balance: ₹${this.balance}`);
    }
  }
};

// Test the methods
bankAccount.deposit(1500);   // ₹1500 deposited
bankAccount.withdraw(2000);  // Withdraws ₹2000
bankAccount.withdraw(1000);  // Insufficient balance if not enough funds left
