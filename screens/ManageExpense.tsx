import { Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenName } from "../navigation/types";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { useAppDispatch } from "../store/hooks";
import { remove } from "../store/expenses";

type ManageExpenseProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.ManageExpense
>;

const ManageExpense = ({ route, navigation }: ManageExpenseProps) => {
  const dispatch = useAppDispatch();
  const id = route.params?.id;
  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${isEditing ? "Edit" : "Add"} Expense`,
    });
  }, [navigation, isEditing]);

  const handleCancel = () => {
    navigation.goBack();
  };
  const handleConfirm = () => {};
  const handleDeleteExpense = () => {
    dispatch(remove({ id: id }));
    navigation.goBack();
  };

  return (
    <View className="flex-1 p-6 bg-indigo-800">
      <View className="flex-row justify-center items-center">
        <Button
          mode="flat"
          onPress={handleCancel}
          className="min-w-[120px] mx-2"
        >
          Cancel
        </Button>
        <Button
          mode="flat"
          onPress={handleConfirm}
          className="min-w-[120px] mx-2"
        >
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>

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
