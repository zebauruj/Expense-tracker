import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { GlobalProvider } from '../context/GlobalContext'; // Adjust path as necessary
import ExpenseForm from '../components/ExpenseForm'; // Adjust path as necessary

describe('ExpenseForm', () => {
  // Test case to check if the form renders correctly
  test('clears input fields after submission', () => {
    render(
      <MemoryRouter> {/* Wrap with MemoryRouter */}
        <GlobalProvider>
          <ExpenseForm />
        </GlobalProvider>
      </MemoryRouter>
    );

    // Check if the form title is rendered
    const titleElement = screen.getByText(/Add Expense/i);
    expect(titleElement).toBeInTheDocument();
  });

  // Test case for form submission
  test('submits the form with correct values', () => {
    render(
      <MemoryRouter> 
        <GlobalProvider>
          <ExpenseForm />
        </GlobalProvider>
      </MemoryRouter>
    );

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Expense' } });
    fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/Category/i), { target: { value: 'Food' } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-10-01' } });


    // Submit the form
    fireEvent.click(screen.getByText(/Expense/i));

    
  });

  // Test case to ensure input fields are clearing after submission (if applicable)
  test('clears input fields after submission', () => {
    render(
      <MemoryRouter> {/* Wrap with MemoryRouter */}
        <GlobalProvider>
          <ExpenseForm />
        </GlobalProvider>
      </MemoryRouter>
    );

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Expense' } });
    fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/Category/i), { target: { value: 'Food' } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-10-01' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Expense/i));

    // Check if input fields are cleared (assuming you clear inputs after submission)
    expect(screen.getByLabelText(/Title/i).value).toBe('');
    expect(screen.getByLabelText(/Amount/i).value).toBe('');
    expect(screen.getByLabelText(/Category/i).value).toBe('');
    expect(screen.getByLabelText(/Date/i).value).toBe("");

  });
});
