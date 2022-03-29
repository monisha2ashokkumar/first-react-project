import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) =>{
  //----------INDIVIDUAL USESTATE METHOD--------------
  const [title, setNewTitle] = useState("");
  const [amount, setNewAmount] = useState("");
  const [date, setNewDate] = useState("");

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();//prevent from refreshing before object is saved in expense
    const expenseData = {
      expenseDate: new Date(date),
      expenseTitle: title,
      expensePrice: amount,
    };    
    props.onSaveExpense(expenseData);
    
    setNewTitle("");
    setNewDate("");
    setNewAmount("");
  };


  //---------------COMBINED USE STATE METHOD[NOT RECOMMENDED}---------
  /*
  const [inputData, setInputData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setInputData((prevState) => {
      return {
        ...prevState, //spread method
        title: event.target.value,
      }; //overridding only title
    });
  };

  const amountChangeHandler = (event) => {
    setInputData((prevState) => {
      return {
        ...prevState, //spread method
        amount: event.target.value,
      }; //overridding only amount
    });
  };
  const dateChangeHandler = (event) => {
    setInputData((prevState) => {
      return {
        ...prevState, //spread method
        date: event.target.value,
      }; //overridding only date
    });
  };

  */
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min={0.01}
              step={0.01}
              value={amount}
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="201901-01"
              max="2022-12-31"
              value={date}
              onChange={dateChangeHandler}
            ></input>
          </div>
          <div className="new-expense__controls">
            <button type="button" onClick={props.onCancel}>Cancel</button>
          </div>
          <div className="new-expense__controls">
            <button type="submit">Submit</button>
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default NewExpenseForm;