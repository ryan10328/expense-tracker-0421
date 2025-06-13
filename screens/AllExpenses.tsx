import React from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { useAppSelector } from "../store/hooks";
import { supabase } from "../lib/supabase";

const AllExpenses = async () => {
  const expenses = useAppSelector((state) => state.expenses.expenses);

  const data = await supabase.from("expenses").select("*");

  console.log(data);

  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
};

export default AllExpenses;
