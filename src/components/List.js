import React, { useRef, useState } from "react";

import "./List.css";
import Card from "./Card";
import ListItem from "./ListItem";

const List = () => {
  const [data, setData] = useState([]);
  const [showError, setShowError] = useState(false);

  const titleRef = useRef();
  const descRef = useRef();

  const addItemTodo = () => {
    const inputValue = titleRef.current.value;
    const descValue = descRef.current.value;

    if (inputValue === "" || descValue === "") {
      setShowError(true);
      return;
    }

    setData((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random().toString(),
          title: inputValue,
          description: descValue,
        },
      ];
    });
  };

  const removeItemTodo = (id) => {
    setData((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });

    console.log(id);
  };

  const closeCard = () => {
    setShowError(false);
  };

  return (
    <div className="container">
      {showError && (
        <Card onCloseCard={closeCard}>
          <h1>Please Enter A valid input values </h1>
          <button onClick={closeCard}>Close</button>
        </Card>
      )}
      <div className="actions">
        <input type="text" placeholder="Title" ref={titleRef} />
        <input type="text" placeholder="Description" ref={descRef} />
        <button onClick={addItemTodo}>Add todo</button>
      </div>
      <ul className="list">
        {data.map((item) => (
          <ListItem
            onRemoveTodo={() => removeItemTodo(item.id)}
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
