
//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Expense from "./component/Expense";
import Card from "./component/Card";
import "./component/Card.css";
import AddExpense from "./component/AddExpense/AddExpense";
const STATIC_EXPENSE_DATA = [
  {
    id: "et1",
    expenseDate: new Date(2021, 1, 14),
    expenseTitle: "Grocery",
    expensePrice: 298.45,
  },
  {
    id: "et2",
    expenseDate: new Date(2022, 1, 15),
    expenseTitle: "Pub",
    expensePrice: 100.5,
  },
  {
    id: "et3",
    expenseDate: new Date(2019, 1, 11),
    expenseTitle: "School fees",
    expensePrice: 888.45,
  },
  {
    id: "et4",
    expenseDate: new Date(2022, 1, 2),
    expenseTitle: "Bus fare",
    expensePrice: 50.45,
  },
];

function App() {
  const [expenses, setExpenses] = useState(STATIC_EXPENSE_DATA);

  const onNewExpenseDataHandler = (expense) => {   
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });

  };

  
  return (
    <div className="App">
      <div>
        <h2>Expense Tracker!!!</h2>
      </div>
      <div>
        <AddExpense onNewExpenseSubmit={onNewExpenseDataHandler}/>
      </div>
      <Card>
        <Expense items={expenses} />
      </Card>
    </div>
  );
}

export default App;
