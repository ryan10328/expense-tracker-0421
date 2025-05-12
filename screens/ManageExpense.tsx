import { Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenName } from "../navigation/types";

type ManageExpenseProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.ManageExpense
>;

const ManageExpense = ({ route, navigation }: ManageExpenseProps) => {
  const id = route.params?.id;
  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${isEditing ? "Edit" : "Add"} Expense`,
    });
  }, [navigation, isEditing]);

  return <Text>{id}</Text>;
};

export default ManageExpense;
