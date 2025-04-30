import React from "react";
import { Text, View } from "react-native";
import { ExpenseType } from "../types";

type ExpensesSummaryProps = {
  expenses: Array<ExpenseType>;
  periodName: string;
};

const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {
  const expensesSum: number = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
