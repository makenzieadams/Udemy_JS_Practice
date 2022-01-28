let myAccount = {
  name: `Makenzie`,
  expenses: 0,
  income: 0,
};

let otherAccount = myAccount;
otherAccount.income = 1000;

// passing around objects
// function that allows us to add expense

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
  console.log(account);
};

addExpense(myAccount, 2.5);
console.log(myAccount);
