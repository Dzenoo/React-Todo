import React from "react";

import "./ListItem.css";

const ListItem = (props) => {
  const { id, title, description } = props;

  return (
    <li className="listItem" id={id} onClick={props.onRemoveTodo}>
      <h1>{title}</h1>
      <p>{description}</p>
      <i>Click on item to remove from list</i>
    </li>
  );
};

export default ListItem;
