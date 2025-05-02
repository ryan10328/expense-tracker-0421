import { View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { ExpenseType } from "../types";

type ExpensesOutputProps = {
  expenses: Array<ExpenseType>;
  expensesPeriod: string;
};

const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;
