import { StatusBar } from "expo-status-bar";
import "./global.css";
import { Navigation } from "./navigation/Navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
