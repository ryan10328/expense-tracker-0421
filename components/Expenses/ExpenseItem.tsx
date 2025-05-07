import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { format } from "date-fns";

type ExpenseItemProps = {
  description: string;
  amount: number;
  date: string;
};

const ExpenseItem = ({ description, amount, date }: ExpenseItemProps) => {
  const handleExpenseItemPress = () => {};

  return (
    <Pressable
      onPress={handleExpenseItemPress}
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple={{ color: "#ccc" }}
    >
      <View
        className="p-3 my-2 bg-indigo-700 shadow-indigo-200 shadow-sm flex-row justify-between rounded-md"
        style={styles.expenseItem}
      >
        <View>
          <Text className="text-sm mb-1 font-bold text-indigo-200">
            {description}
          </Text>
          <Text className="text-sm mb-1 font-bold text-indigo-200">
            {format(new Date(date), "yyyy-MM-dd")}
          </Text>
        </View>
        <View className="px-3 py-1 bg-white justify-center items-center rounded min-w-[80px]">
          <Text className="text-indigo-900 text-bold">{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    shadowOffset: { width: 1, height: 1 },
    elevation: 3,
  },
});
