import { View, Text } from "react-native";
import Input from "./Input";
import Button from "../ui/Button";
import { useState } from "react";
import { Expense } from "../types";
import { format } from "date-fns";

type ExpenseFormProps = {
  onCancel: () => void;
  onSubmit: (data: Expense) => void;
  defaultValues?: Expense;
  submittionLabel: string;
};

const ExpenseForm = ({
  onCancel,
  onSubmit,
  defaultValues,
  submittionLabel,
}: ExpenseFormProps) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues
      ? format(new Date(defaultValues.date), "yyyy-MM-dd")
      : "",
    description: defaultValues ? defaultValues.description : "",
  });

  const onInputChanged = (val: string, identifier: string) => {
    setInputValues((currentVals) => {
      return {
        ...currentVals,
        [identifier]: val,
      };
    });
  };

  const handleSubmit = () => {
    const data: Expense = {
      amount: +inputValues.amount,
      date: inputValues.date,
      description: inputValues.description,
    };

    onSubmit(data);
  };

  return (
    <View className="mt-[80px] mb-4">
      <Text className="text-2xl font-bold text-white my-6 text-center">
        Your Expense
      </Text>
      <View className="flex-row justify-between">
        <Input
          className="flex-1"
          label="Amount"
          config={{
            keyboardType: "decimal-pad",
            onChangeText: (evt) => onInputChanged(evt, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          className="flex-1"
          label="Date"
          config={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (evt) => onInputChanged(evt, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        config={{
          multiline: true,
          onChangeText: (evt) => onInputChanged(evt, "description"),
          value: inputValues.description,
        }}
      />
      <View className="flex-row justify-center items-center">
        <Button mode="flat" onPress={onCancel} className="min-w-[120px] mx-2">
          Cancel
        </Button>
        <Button
          mode="flat"
          onPress={handleSubmit}
          className="min-w-[120px] mx-2"
        >
          {submittionLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;
