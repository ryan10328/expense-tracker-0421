import { NavigationProp } from "@react-navigation/native";

export const enum ScreenName {}

export type RootStackParamList = {};

export type NavigationPropRootStack = NavigationProp<RootStackParamList>;

export const screenTitle: Record<ScreenName, string> = {};
