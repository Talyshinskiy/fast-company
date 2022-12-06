import React, { useState } from "react";
import Counter from "./counter";

const CounterList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounter = counters.filter((c) => c.id !== id);
    setCounters(newCounter);
  };

  const handleReset = () => {
    setCounters(initialState);
    console.log("hadleReset");
  };
  const handleIncrement = (id) => {
    // console.log(id);
    const updatedCount = counters.map((count) =>
      count.id === id ? { ...count, value: count.value + 1 } : count
    );
    setCounters(updatedCount);
  };

  const handleDecrement = (id) => {
    const updatedCount = counters.map((count) =>
      count.id === id ? { ...count, value: count.value - 1 } : count
    );
    setCounters(updatedCount);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={() => handleIncrement(count.id)}
          onDecrement={() => handleDecrement(count.id)}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CounterList;
