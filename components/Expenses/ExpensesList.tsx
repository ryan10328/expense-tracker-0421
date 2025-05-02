import { Text, FlatList, ListRenderItemInfo } from "react-native";
import React from "react";
import type { Expense } from "../types";

type ExpensesListProps = {
  expenses: Array<Expense>;
};

const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <FlatList
      data={expenses}
      renderItem={(expense: ListRenderItemInfo<Expense>) => {
        return <Text>{expense.item.description}</Text>;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
