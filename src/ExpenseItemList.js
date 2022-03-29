import ExpenseItem from "./component/ExpenseItem";
import "./component/ExpenseItem.css";
import "./ExpenseItemList.css";

export default function ExpenseItemList(props) {
  if (props.itemList.length === 0) {
    return <p className="expenses-list__fallback">No expense record found</p>;
  }

  return (
    <div className="expenses-list">
      <ul>
        {props.itemList.map((item) => (
          <ExpenseItem
            key={item.id}
            expDate={item.expenseDate}
            title={item.expenseTitle}
            price={item.expensePrice}
          ></ExpenseItem>
        ))}
      </ul>
    </div>
  );
}
