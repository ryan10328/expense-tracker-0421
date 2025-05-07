import React from "react";
import { Text, View } from "react-native";
import type { Expense } from "../types";
import { GlobalStyles } from "../../constants/styles";

type ExpensesSummaryProps = {
  expenses: Array<Expense>;
  periodName: string;
};

const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {
  const expensesSum: number = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View className="mb-2 p-2 rounded-md bg-indigo-200 flex-row justify-between items-center">
      <Text className="text-[12px] color-indigo-700">{periodName}</Text>
      <Text className="text-[16px] color-indigo-700 font-bold">
        ${expensesSum.toFixed(2)}
      </Text>
    </View>
  );
};

export default ExpensesSummary;
