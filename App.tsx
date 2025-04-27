import { StatusBar } from "expo-status-bar";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer></NavigationContainer>
    </>
  );
}
