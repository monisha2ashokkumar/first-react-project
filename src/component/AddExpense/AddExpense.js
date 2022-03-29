import { useState } from "react";
import "./AddExpense.css";
import NewExpenseForm from "./NewExpenseForm";

export default function AddExpense(props) {
  const [pageEnable, setPageEnable] = useState();

  const pageEnableHandler = () => {
    setPageEnable(true);
  };

  const onSaveHandler = (dataFromNewExpenseForm) => {
    const expenseData = {
      ...dataFromNewExpenseForm,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onNewExpenseSubmit(expenseData);
    setPageEnable(false);
  };

  const onCancelHandler = () => {
    setPageEnable(false);
  };

  return (
    <div className="new-expense">
      {!pageEnable && (
        <button onClick={pageEnableHandler}>Add New Expense</button>
      )}
      {pageEnable && <NewExpenseForm onSaveExpense={onSaveHandler} onCancel={onCancelHandler} />}
    </div>
  );
}
