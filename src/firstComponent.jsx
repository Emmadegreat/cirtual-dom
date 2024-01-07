import React, { useState } from 'react';

const FirstComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Component Without Optimization</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>This component re-renders on every count change.</p>
    </div>
  );
};

export default FirstComponent;
