import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Equivalente a componentDidMount
  useEffect(() => {
    console.log("Component mounted");

    // Equivalente a componentWillUnmount
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}
