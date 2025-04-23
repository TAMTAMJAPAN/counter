'use client';

import React, { useState } from 'react';

const Counter = () => {
  // useStateでカウントの状態を管理
  const [count, setCount] = useState(0);

  // カウントを1増加させる関数
  const increment = () => {
    setCount(count + 1);
  };

  // カウントを1減少させる関数
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>カウント: {count}</h1>
      <button onClick={increment} style={{ marginRight: '10px' }}>
        増加
      </button>
      <button onClick={decrement}>
        減少
      </button>
    </div>
  );
};

export default Counter;
