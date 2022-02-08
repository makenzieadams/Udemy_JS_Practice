const account = {
  name: "Makenzie",
  expenses: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: "description",
      amount: amount,
    });
  },

  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },

  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;
    let accountBalance = 0;

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount;
    });
    this.addIncome.forEach(function (income) {
      totalIncome = totalIncome - totalExpenses;

      return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income and $${totalExpenses} in expenses.`;
    });
  },
};

account.addExpense("Rent", 650);
account.addExpense("Coffee", 4);
account.addIncome("Job", 1200);
account.addIncome("Gift", 20);
console.log(account.getAccountSummary());
