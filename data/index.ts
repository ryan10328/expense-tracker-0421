import { Expense } from "../components/types";

export const DUMMY_EXPENSES: Array<Expense> = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-01-01"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2025-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2025-01-06"),
  },
  {
    id: "e4",
    description: "Some apples",
    amount: 2.99,
    date: new Date("2025-01-20"),
  },
  {
    id: "e5",
    description: "Some SD cards",
    amount: 25.0,
    date: new Date("2025-01-31"),
  },
];
