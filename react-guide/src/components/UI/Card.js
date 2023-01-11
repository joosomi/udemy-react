import React from "react";
import "./Card.css";

//props.children => 사용자 지정 컴포넌트의 태그 사이 있는 컨텐츠
// function Card(props) {
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
