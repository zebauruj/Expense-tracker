import React from "react";
import Summary from "../components/Summary";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container home-page">
      <div className="home-buttons">
        <Link to="/add">
          <button>Add New Expense</button>
        </Link>
        <Link to="/expenses">
          <button style={{ marginLeft: '10px' }}>View All Expenses</button>
        </Link>
      </div>
      <Summary />
    </div>
  );
};

export default HomePage;
