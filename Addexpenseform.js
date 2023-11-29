// src/AddExpenseForm.js
import React, { useState } from 'react';

const AddExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    fetch('http://localhost:3001/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description,
        amount,
      }),
    });
  };

  return (
    <div>
      <h1>Add Expense</h1>
      <form>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddExpense}>
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
