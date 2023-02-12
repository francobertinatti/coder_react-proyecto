import React, { useState } from "react";

const ItemCount = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const onPlus = () => {
    if (count < stock) setCount(count + 1);
  };

  const onDecrement = () => {
    if (count > initial) setCount(count - 1);
  };

  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-secondary m-2" onClick={onDecrement}>
        -
      </button>
      <span className="mx-2 m-2">{count}</span>
      <button className="btn btn-secondary m-2" onClick={onPlus}>
        +
      </button>
      <button className="btn btn-success ml-2" onClick={() => onAdd(count)}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;
