import { useState } from "react";
import "./../../App.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      {count > 1 && <button onClick={() => setCount(0)}>Reset</button>}
    </>
  );
}
