import React from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { useAppSelector } from "../store/hooks";

const AllExpenses = () => {
  const expenses = useAppSelector((state) => state.expenses.expenses);

  return <ExpensesOutput expenses={expenses} expensesPeriod="Total" />;
};

export default AllExpenses;
