class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let sum = 0;
    for (const singleTrans of this.transactions) {
      sum += singleTrans;
    }
    return sum;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction.value);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (this.value < 0 && this.account.balance <= this.amount) {
      return "Insufficient Funds";
    }
    this.time = new Date();
    this.account.addTransaction(this);
  }
}

class Withdrawal extends Transaction {
  get value() {
    return this.amount * -1;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("Aaron");

let tOne = new Deposit(60, myAccount);
tOne.commit();
console.log("Transaction 3:", tOne);

let t1 = new Withdrawal(50, myAccount);
t1.commit();
console.log("Transaction 1:", t1);

let t2 = new Withdrawal(30, myAccount);
t2.commit();
console.log("Transaction 2:", t2);

let t3 = new Deposit(100, myAccount);
t3.commit();
console.log("Transaction 3:", t3);

console.log(myAccount.balance);
