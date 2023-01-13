import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// function ExpenseItem(props) {
const ExpenseItem = (props) => {
  //등호를 써서 연산자로 새로운 값을 부여하지 않기에 const를 써도 괜찮다.
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluted by React");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

//클릭할 때만 실행되도록 onClick={functionName}
//함수 이름은 ~handler로 끝나게 이벤트 핸들러 함수를 하는 것을 선호
