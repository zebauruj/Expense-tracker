import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import { useNavigate } from 'react-router-dom';

const ExpenseFormPage = () => {
const navigate = useNavigate();
  return (
    <div className="container form-page fade-in">
      <h2>{window.location.pathname.includes("edit") ? "Edit Expense" : "Add New Expense"}</h2>
      <ExpenseForm />
      <button className="back-button" onClick={() => navigate('/')}>
        Back 
      </button>
    </div>
  );
};

export default ExpenseFormPage;
