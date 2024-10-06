import React from "react";
import ExpenseList from "../components/ExpenseList";
import { useNavigate } from 'react-router-dom';

const ExpenseListPage = () => {
    const navigate = useNavigate();
  return (
    <div className="container list-page">
      <h2>Expense List</h2>
      <ExpenseList />
      <button className="back-button" onClick={() => navigate('/')}>
        Back 
      </button>
    </div>
  );
};

export default ExpenseListPage;
