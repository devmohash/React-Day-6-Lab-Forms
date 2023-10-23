import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <button role="button" className="btn btn-success me-4" onClick={increase}>
        +
      </button>
      <h5 className="m-0">{count}</h5>
      <button className="btn btn-danger ms-4" role="button" onClick={decrease}>
        -
      </button>
    </div>
  );
};

export default Counter;
