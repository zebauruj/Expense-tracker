import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

const ExpenseForm = () => {
  const { addExpense, editExpense, expenses } = useContext(GlobalContext);
  const [expense, setExpense] = useState({ title: "", amount: "", category: "", date: "" });
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const expenseToEdit = expenses.find(exp => exp.id === id);
      if (expenseToEdit) {
        setExpense(expenseToEdit);
      }
    }
  }, [id, expenses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editExpense({ ...expense, id });
    } else {
      addExpense({ ...expense, id: Date.now().toString() });
    }

    // Clear the form fields
    setExpense({ title: "", amount: "", category: "", date: "" });
    
    history("/expenses");
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
        <label htmlFor="title">Title</label>
            <input
                id="title"
                type="text"
                name="title"
                value={expense.title}
                onChange={handleChange}
                placeholder="Expense Title"
                required
            />
      </div>
      <div className="form-group">
      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        type="number"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      </div>
      <div className="form-group">
      <label htmlFor="category">Category</label>
      <input
        id="category"
        type="text"
        name="category"
        value={expense.category}
        onChange={handleChange}
        placeholder="Category"
      />
      </div>
      <div className="form-group">
      <label htmlFor="date">Date</label>
      <input
        id="date"
        type="date"
        name="date"
        value={expense.date}
        onChange={handleChange}
      />
      </div>
      <button type="submit">{id ? "Update" : "Add"} Expense</button>
    </form>
  );
};

export default ExpenseForm;