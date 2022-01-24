const account = {
  name: "Makenzie",
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
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
    let total = 0;
    this.expenses.forEach(function (expense) {
      total = expense.amount + total;
    });
    return `${this.name} has $${total} in expenses.`;
  },
};

account.addExpense("Hair", 150);
account.addExpense("groceries", 150);

console.log(account.getAccountSummary());

//Expense -> description (string), amount
//addExpense -> 2 arguments: descriptions, amount
//getAccountSummary -> total up all expenses -> return string
//use forEach to go through every item in expenses array - get object and add it onto variable
