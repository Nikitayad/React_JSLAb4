// src/ExpenseList.js
import React, { useState, useEffect } from 'react';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/expenses')
      .then((response) => response.json())
      .then((data) => setExpenses(data));
  }, []);

  return (
    <div>
      <h1>Expense List</h1>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - {expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
