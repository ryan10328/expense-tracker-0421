import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Expense } from "../components/types";
import { supabase } from "../lib/supabase";

export const fetchAllExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async (_, thunkApi) => {
    const { data } = await supabase.from("expenses").select();
    return data as Expense[];
  },
);

export type ExpensesState = {
  expenses: Expense[];
  loading: boolean;
};

const state: ExpensesState = {
  expenses: [],
  loading: false,
};

// we can directily manipulate state because redux-toolkit supports immer
// that can help us simplify our logic
const expensesSlice = createSlice({
  name: "expenses",
  initialState: state,
  reducers: {
    add: (state, action) => {
      const id = new Date().toString() + Math.random().toString();
      const { amount, description, date } = action.payload;
      state.expenses.push({
        id: id,
        amount: amount,
        date: date,
        description: description,
      });
    },
    update: (state, action) => {
      const item = state.expenses.find((g) => g.id === action.payload.id);
      const { amount, description, date } = action.payload;
      if (item) {
        item.amount = amount;
        item.description = description;
        item.date = date;
      }
    },
    remove: (state, action) => {
      const { id } = action.payload;
      const index = state.expenses.findIndex((g) => g.id === id);
      state.expenses.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllExpenses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllExpenses.fulfilled, (state, action) => {
      const expenses = action.payload || [];
      console.log("expenses: ", expenses);
      state.expenses = expenses;
      state.loading = true;
    });
  },
});

export default expensesSlice.reducer;
export const { add, update, remove } = expensesSlice.actions;
