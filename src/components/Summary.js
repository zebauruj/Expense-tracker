import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Pie, Bar } from 'react-chartjs-2';  
import 'chart.js/auto'; 

const Summary = () => {
  const { expenses } = useContext(GlobalContext);
  const [view, setView] = useState("date"); 

  const parseLocalDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return new Date(year, month - 1, day); 
  };

  // Function to calculate total expenses
  const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);

  // Group expenses by date and sum their amounts
  const groupedExpensesByDate = expenses.reduce((acc, expense) => {
    const date = expense.date; // Use the raw date string for grouping
    if (!acc[date]) {
      acc[date] = 0; 
    }
    acc[date] += parseFloat(expense.amount); // Sum the amounts for the same date
    return acc;
  }, {});

  // Categorize expenses
  const categorizedExpenses = expenses.reduce((acc, expense) => {
    const category = expense.category || "Uncategorized";
    acc[category] = (acc[category] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  // Sort expenses by date
  const expensesByDate = [...expenses].sort((a, b) => parseLocalDate(a.date) - parseLocalDate(b.date));
  
  const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };

  // Data for the Pie Chart (for category view)
  const pieChartData = {
    labels: Object.keys(categorizedExpenses),
    datasets: [{
      label: 'Expenses by Category',
      data: Object.values(categorizedExpenses),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
    }]
  };

  // Data for the Bar Chart (for date view)
  const barChartData = {
    labels: Object.keys(groupedExpensesByDate).map(date => parseLocalDate(date).toLocaleDateString('en-US', dateOptions)),
    datasets: [{
      label: 'Expenses by Date',
      data: Object.values(groupedExpensesByDate),
      backgroundColor: 'rgb(26,51,106)',
      borderWidth: 1
    }]
  };
  

  return (
    <div className="container summary-page">
      <h2>Expense Summary</h2>

      {/* Dropdown for selecting view */}
      <div className="view-toggle">
        <label htmlFor="view">View by: </label>
        <select id="view" value={view} onChange={(e) => setView(e.target.value)}>
          <option value="date">Date</option>
          <option value="category">Category</option>
        </select>
      </div>

      <div className="summary-content">
        <div className="summary-box">
          <h4>Total Expenses</h4>
          <p className="total-amount">${total}</p>
        </div>

        {view === "category" ? (
          <div className="summary-box">
            <h4>Expenses by Category</h4>
            <ul className="category-list">
              {Object.keys(categorizedExpenses).map((category) => (
                <li key={category}>
                  <span>{category}:</span> <span>${categorizedExpenses[category]}</span>
                </li>
              ))}
            </ul>
            {/* Pie Chart for Category View */}
            <Pie data={pieChartData} />
          </div>
        ) : (
          <div className="summary-box">
            <h4>Expenses by Date</h4>
            <ul className="date-list">
             {Object.keys(groupedExpensesByDate).map((date) => (
                <li key={date}>
                  <span>{parseLocalDate(date).toLocaleDateString("en-US", dateOptions)}:</span>
                  <span>${groupedExpensesByDate[date].toFixed(2)}</span>
                </li>
              ))}
            </ul>
              {/* Bar Chart for Date View */}
              <Bar data={barChartData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
