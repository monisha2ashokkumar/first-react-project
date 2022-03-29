import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "./Card";
import './Card.css';

export default function ExpenseItem(props){

    const [title, setTitle] = useState(props.title);

    const titleChangeClickHandler = () =>{
        setTitle('Changed to EB')
        console.log('Clicked change title button');
    }

        return (
           
        <Card className="expense-item">
            <ExpenseDate date={props.expDate}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price"><h2>${props.price}</h2></div>
            </div>
            <button onClick={titleChangeClickHandler}>Change Title</button>
        </Card>

    );
}

