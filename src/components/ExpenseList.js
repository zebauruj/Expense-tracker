import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(GlobalContext);
  const history = useNavigate();

  return (
    <div>
      
      {expenses.length === 0 ? (
        <p colSpan="4" className="no-expenses">No expenses added yet.</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.title}</td>
                <td>${expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
                <td>
                  <button onClick={() => history
                    (`/edit/${expense.id}`)}>Edit</button>
                  <button onClick={() => deleteExpense(expense.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
    </div>
  );
};

export default ExpenseList;