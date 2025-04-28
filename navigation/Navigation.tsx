import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenName, screenTitle } from "./types";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "../screens/ManageExpense";
import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTabs = createBottomTabNavigator();

export function ExpensesOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTabs.Navigator>
  );
}

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenName.ExpensesOverview}
          component={ExpensesOverview}
        />

        <Stack.Screen
          name={ScreenName.ManageExpense}
          component={ManageExpense}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
