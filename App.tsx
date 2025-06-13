import { StatusBar } from "expo-status-bar";
import "./global.css";
import { Navigation } from "./navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}
