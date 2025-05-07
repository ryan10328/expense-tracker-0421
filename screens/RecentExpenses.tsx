import { View, Text } from "react-native";
import React from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { DUMMY_EXPENSES } from "../data";

const RecentExpenses = () => {
  return (
    <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpenses;
