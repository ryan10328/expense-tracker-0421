import { View, Text } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  return (
    <View className="mt-[80px]">
      <Text className="text-2xl font-bold text-white my-6 text-center">
        Your Expense
      </Text>
      <View className="flex-row justify-between">
        <Input
          className="flex-1"
          label="Amount"
          config={{
            keyboardType: "decimal-pad",
            onChangeText: () => {},
          }}
        />
        <Input
          className="flex-1"
          label="Date"
          config={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        config={{
          multiline: true,
        }}
      />
    </View>
  );
};

export default ExpenseForm;
