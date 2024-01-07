import React, { useState } from 'react';

const SecondComponent = React.memo(() => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Component With Optimization (React.memo)</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>This component is optimized using React.memo.</p>
    </div>
  );
});

export default SecondComponent;
