// import logo from './logo.svg';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const handleincrease = () => {
    setCount(count + 1)
  }
  const handledecrease = () => {
    setCount(count - 1)
  }
  const handleShowText = () => {
    setDisplayText(`Counter Value: ${count}`);
  };

  return (


    <div className='d-flex justify-content-center align-items-center bg-dark  text-light' style={{ height: "100vh" }}>
      <div>
        <p className='text-center ' style={{ fontSize: "30px" }}>Simple Counter</p>
        <h1 className='text-center ' style={{ fontSize: "50px" }}>{count}</h1>
        <div className='d-flex'>
          <button onClick={handleincrease} className='btn btn-primary me-3 ' >increase</button>
          <button onClick={handledecrease} className='btn btn-danger ms-3 '>decrease</button>
        </div>
        <div className='text-center ' >
          <p>{displayText}</p>
          <button onClick={handleShowText}>Show Text</button>
          <p>Counter: {count}</p>
        </div>
      </div>

    </div>

  );
}

export default Counter;
