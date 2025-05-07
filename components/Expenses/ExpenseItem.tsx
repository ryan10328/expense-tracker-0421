import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { format } from "date-fns";

type ExpenseItemProps = {
  description: string;
  amount: number;
  date: string;
};

const ExpenseItem = ({ description, amount, date }: ExpenseItemProps) => {
  return (
    <Pressable>
      <View
        className="p-3 my-2 bg-purple-500 shadow-purple-200 shadow-sm flex-row justify-between rounded-md"
        style={styles.expenseItem}
      >
        <View className="text-purple-200">
          <Text className="text-sm mb-1 font-bold">{description}</Text>
          <Text className="text-sm mb-1 font-bold">
            {format(new Date(date), "yyyy-MM-dd")}
          </Text>
        </View>
        <View className="px-3 py-1 bg-white justify-center items-center rounded">
          <Text className="text-purple-900 text-bold">{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    shadowOffset: { width: 1, height: 1 },
    elevation: 3,
  },
});
