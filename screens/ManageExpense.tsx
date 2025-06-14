import { View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenName } from "../navigation/types";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { remove, add, update, fetchAllExpenses } from "../store/expenses";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { Expense } from "../components/types";
import { supabase } from "../lib/supabase";

type ManageExpenseProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.ManageExpense
>;

const ManageExpense = ({ route, navigation }: ManageExpenseProps) => {
  const dispatch = useAppDispatch();
  const expenses = useAppSelector((state) => state.expenses.expenses);
  const id = route.params?.id;
  const isEditing = !!id;

  const selectedItem = expenses.find((g) => g.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${isEditing ? "Edit" : "Add"} Expense`,
    });
  }, [navigation, isEditing]);

  const handleCancel = () => {
    navigation.goBack();
  };
  const handleConfirm = async (model: Expense) => {
    try {
      if (isEditing) {
        const { error } = await supabase
          .from("expenses")
          .update({
            description: model.description,
            amount: model.amount,
            date: model.date,
            updatedOn: new Date(),
          })
          .eq("id", id);
        if (error) throw new Error(error.message);
      } else {
        const { error } = await supabase
          .from("expenses")
          .insert({ ...model })
          .select()
          .single();
        if (error) throw new Error(error.message);
      }
      dispatch(fetchAllExpenses());
    } catch (e) {
      console.error(e);
    }

    navigation.goBack();
  };
  const handleDeleteExpense = async () => {
    try {
      const { error } = await supabase.from("expenses").delete().eq("id", id);
      if (error) throw new Error(error.message);
      dispatch(remove({ id: id }));
      navigation.goBack();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View className="flex-1 p-6 bg-indigo-800">
      <ExpenseForm
        submittionLabel={isEditing ? "Update" : "Add"}
        onSubmit={handleConfirm}
        onCancel={handleCancel}
        defaultValues={selectedItem}
      />
      {isEditing && (
        <View className="mt-4 pt-2 border-t-2 border-t-indigo-200 items-center">
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={handleDeleteExpense}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;
