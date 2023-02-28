import React from "react";

import "./Card.css";

const Card = (props) => {
  // Card 는 사용자 지정 컴포넌트이기에 className도 지정해줘야 알아들음
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
