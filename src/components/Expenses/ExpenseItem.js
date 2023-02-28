import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  /*   const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("update");
    //setTitle
    //setTitle함수가 실행되고 state 변경하고 싶다고 리액트한테 말함
    //함수는 또한 useState로 state가 등록된 컴포넌트는 재평가 되어야 한다고 리액트한테 말함
    //그래서 리액트는 해당 함수 컴포넌트를 다시 실행
    //지난 번과 비교해서 감지된 변화들을 화면에 보여줌
  }; */

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
