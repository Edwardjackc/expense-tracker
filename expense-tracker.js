const account = { 
  name : 'Edward Cheatham', 
  expenses: [],
  income: [],
  addExpense: function (description, amount) { 
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  addIncome : function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary : function() {
  let totalExpenses = 0;
  let totalIncome = 0;
  let accountBalance = 0;

  this.expenses.forEach(function(expense) {
    totalExpenses = totalExpenses + expense.amount;
  })
  this.income.forEach(function (income) {
    totalIncome = totalIncome + income.amount
  })
  accountBalance = totalIncome - totalExpenses
    return `${this.name} has a $${accountBalance}. $${totalIncome} in income.  $${this.expenses} in expenses.`;
    }
  }

account.addExpense('Rent', 2000)
account.addExpense('Car', 1000)
account.addIncome('Job', 5000)
console.log(account.getAccountSummary())