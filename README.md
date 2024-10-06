# Personal Expense Tracker

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Testing](#testing)
- [Assumptions](#assumptions)

## Overview
The Personal Expense Tracker is a web application that helps users manage their expenses by allowing them to add, edit, view, and delete expense entries. Users can also view their expenses summarized by category or date with visual charts.

## Technologies Used
- **Frontend Framework**: React
- **Routing**: React Router
- **State Management**: Context API
- **Data Persistence**: Local Storage
- **Styling**: CSS Flexbox
- **Testing**: React Testing Library, Jest
- **Charting**: Chart.js (for visual representation of expenses)

## Setup Instructions
Follow these steps to set up and run the application locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. **Install Dependencies Make sure you have Node.js installed. Then, run:**
   ```bash
   npm install

3. **Run the Application Start the development server:**
    ```bash
    npm start

4. **Access the Application Open your web browser and navigate to http://localhost:3000 to see the         application running.**

## Testing
**To run the tests for the application, use the following command:**

    npm test

This will execute all test cases using Jest and React Testing Library.

### Optional Features Testing
* The application includes features like visual representation of expenses (charts).
* Ensure that you have the necessary libraries (like Chart.js) installed to see these features functioning correctly.
* Mock the necessary components when running tests to avoid DOM access errors.

## Assumptions
* Users will have a modern web browser with JavaScript enabled.
* The application relies on local storage for data persistence, meaning that the data will be available across page reloads but will be cleared if the browser cache is cleared.