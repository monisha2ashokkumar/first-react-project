import { useState } from "react";
import "./Expense.css";
import Card from "./Card";
import "./Card.css";
import ExpenseFilter from "./FilterExpense/ExpenseFilter";
import ExpenseItemList from "../ExpenseItemList";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [defaultYear, setSelectedYear] = useState("2022");

  const onYearSelectionHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.expenseDate.getFullYear().toString() === defaultYear;
  });

 
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={defaultYear}
          onYearSelection={onYearSelectionHandler}
        ></ExpenseFilter>
        <ExpenseChart expenses={filteredExpenses} ></ExpenseChart>
        <ExpenseItemList itemList = {filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expense;
