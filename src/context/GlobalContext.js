import React, { createContext, useState,useEffect } from "react";

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);

    // Load expenses from localStorage when the component mounts
    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(storedExpenses);
    }, []);

    // Store expenses in localStorage whenever the expenses array changes
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    // Add expense
    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    // Edit expense
    const editExpense = (updatedExpense) => {
        setExpenses(expenses.map(exp => exp.id === updatedExpense.id ? updatedExpense : exp));
    };

    // Delete expense
    const deleteExpense = (id) => {
        setExpenses(expenses.filter(exp => exp.id !== id));
    };

    return (
    <GlobalContext.Provider
        value={{
        expenses,
        addExpense,
        editExpense,
        deleteExpense,
        }}
    >
        {children}
    </GlobalContext.Provider>
    );
};