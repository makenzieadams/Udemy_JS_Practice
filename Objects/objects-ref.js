let myAccount = {
  name: "Makenzie",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};
let addIncome = function (account, income) {
  account.income = account.income + income;
};
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};
let getAccountSummary = function (account) {
  let accountBalance = account.income - account.expenses;
  return `Account for ${account.name} has ${accountBalance}. $${account.income} in income, and $${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 250);
addExpense(myAccount, 500);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
