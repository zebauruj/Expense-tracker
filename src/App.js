import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import HomePage from "./pages/HomePage";
import ExpenseFormPage from "./pages/ExpenseFormPage";
import ExpenseListPage from "./pages/ExpenseListPage";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <div>
          <h1>Welcome to Personal Expense Manager</h1>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<ExpenseFormPage />} />
          <Route path="/edit/:id" element={<ExpenseFormPage />} />
          <Route path="/expenses" element={<ExpenseListPage />} />
        </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
};

export default App;