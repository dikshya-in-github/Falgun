import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(100);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>
        Count: <span id="count-value">{count}</span>
      </h2>
      <button onClick={increment}>increment</button>
      <br></br>
      <br></br>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
