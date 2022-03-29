import './ExpenseDate.css';
import Card from "./Card";
import './Card.css';

function ExpenseDate(props) {
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });

  return (
    <Card className='expense-date'>
      <div className='expense-date__month'>{month}</div>      
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </Card>
  );
}

export default ExpenseDate;
