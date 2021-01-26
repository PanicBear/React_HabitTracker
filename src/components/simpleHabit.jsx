import React, { useCallback, useEffect, useRef, useState } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated! : ${count}`, [count]);
    console.log(spanRef.current.textContent);
  });

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span ref={spanRef} className="habit-count">
        {count}
      </span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
