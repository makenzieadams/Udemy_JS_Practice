const account = {
  name: "Makenzie",
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
  addIncome: function (description, amount) {
    this.income.push({ description, amount });
  },
  income: [],
  expenses: [
    {
      description: "Rent",
      amount: 650,
    },
    {
      description: "Car",
      amount: 225,
    },
    {
      description: "Phone",
      amount: 145,
    },
    {
      description: "internet",
      amount: 100,
    },
    {
      description: "trash",
      amount: 20,
    },
  ],
  getAccountSummary: function () {
    let totalExpenses = 0;
    this.expenses.forEach(function (expense) {
      totalExpenses = expense.amount + totalExpenses;
    });
    let totalIncome = 0;
    this.income.forEach(function (income) {
      totalIncome = income.amount + totalIncome;
    });
    return `${this.name} has a balance of $${
      totalIncome - totalExpenses
    }. $${totalIncome} in income, and $${totalExpenses} in expenses.`;
  },
};

account.addExpense("Hair", 150);
account.addExpense("groceries", 150);
account.addIncome("Job", 2000);

console.log(account.getAccountSummary());

//Part One

//Expense -> description (string), amount
//addExpense -> 2 arguments: descriptions, amount
//getAccountSummary -> total up all expenses -> return string
//use forEach to go through every item in expenses array - get object and add it onto variable

//Part Two
// 1. add income array to account
// 2. add income method -> description, amount
// 3. tweak getAccountSummary
