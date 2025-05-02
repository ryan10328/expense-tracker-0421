import { Text, FlatList, ListRenderItemInfo } from "react-native";
import React from "react";
import { ExpenseType } from "../types";

type ExpensesListProps = {
  expenses: Array<ExpenseType>;
};

const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <FlatList
      data={expenses}
      renderItem={(expense: ListRenderItemInfo<ExpenseType>) => {
        return <Text>{expense.item.description}</Text>;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
