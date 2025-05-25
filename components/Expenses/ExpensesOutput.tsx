import { View, Text } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import type { Expense } from "../types";

type ExpensesOutputProps = {
  expenses: Array<Expense>;
  expensesPeriod: string;
  fallbackText: string;
};

const ExpensesOutput = ({
  expenses,
  expensesPeriod,
  fallbackText,
}: ExpensesOutputProps) => {
  return (
    <View className="px-6 pt-6 pb-0 bg-indigo-900 flex-1">
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {expenses.length > 0 ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <Text className="text-white text-[16px] text-center mt-8">
          {fallbackText}
        </Text>
      )}
    </View>
  );
};

export default ExpensesOutput;
