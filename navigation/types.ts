import { NavigationProp } from "@react-navigation/native";

export const enum ScreenName {
  ManageExpense = "ManageExpense",
  ExpensesOverview = "ExpensesOverview",
}

export type RootStackParamList = {
  [ScreenName.ManageExpense]: undefined;
  [ScreenName.ExpensesOverview]: undefined;
};

export type NavigationPropRootStack = NavigationProp<RootStackParamList>;

export const screenTitle: Record<ScreenName, string> = {
  [ScreenName.ManageExpense]: "Manage Expense",
  [ScreenName.ExpensesOverview]: "Expenses Overview",
};
