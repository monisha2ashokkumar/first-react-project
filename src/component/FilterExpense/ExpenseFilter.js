import { useState } from "react";
import "./ExpenseFilter.css";

export default function ExpenseFilter(props) {
  const onYearChangeHandler = (event) => {
    props.onYearSelection(event.target.value);
  };

  return (
    <div>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={props.selectedYear} onChange={onYearChangeHandler}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    </div>
  );
}
