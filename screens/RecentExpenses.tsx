import React from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { useAppSelector } from "../store/hooks";
import { differenceInDays } from "date-fns";

const RecentExpenses = () => {
  const expenses = useAppSelector((state) => state.expenses.expenses);
  const recentExpenses = expenses.filter(
    (expense) => differenceInDays(new Date(), new Date(expense.date)) <= 7,
  );
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpenses;
