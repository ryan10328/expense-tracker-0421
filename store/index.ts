import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import expenses from "./expenses";

export const store = configureStore({
  reducer: {
    expenses: expenses,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
