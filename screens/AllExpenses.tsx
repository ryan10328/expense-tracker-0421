import React from "react";
import { useAppSelector } from "../store/hooks";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

const AllExpenses = () => {
  const expenses = useAppSelector((state) => state.expenses.expenses);

  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
};

export default AllExpenses;
