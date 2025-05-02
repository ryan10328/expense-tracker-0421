import { View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import type { Expense } from "../types";

type ExpensesOutputProps = {
  expenses: Array<Expense>;
  expensesPeriod: string;
};

const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
  return (
    <View className="px-6 pt-6 pb-0 bg-purple-900 flex-1">
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;
