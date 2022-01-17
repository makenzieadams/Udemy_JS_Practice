// 3 functions
// addIncome (take account, amount of income to add)
// resetAccount (reset to static 0)
// getAccountSummary (summary of account: balance, total in expenses and income)

let myAccount = {
  name: `Makenzie`,
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
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 150);
console.log(getAccountSummary(myAccount));
