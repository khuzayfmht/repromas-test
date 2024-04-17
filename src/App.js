import React, { useEffect, useState } from 'react';
import './App.css';
import useMyhook from './myhook';

function App () {
  const [count, setCount] = useState (0);
  const [name, setName] = useState ('');
  const [gender, setGender] = useState ('');
  const {num} = useMyhook();

  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    setStudentList((prev) => [...prev, {name: 'isa', className: 'JSS 1'}]);
  }, []);


  const sum = (a, b) => {
    const rs = a - 10;
    const callbackRes = b (rs);
    console.log ({callbackRes});
    
  };
  const myCallBack = z => {
    return z + 10;
  };
  sum (2, myCallBack);
  return (
    <div className="container">
      <div>ABC {num}</div>
      <div>
        <p>{count}</p>
        <button
          className="btn-primary"
          onClick={() => setCount (prev => prev + 1)}
        >
          Increment
        </button>
        <p>
          <button onClick={() => setCount (prev => prev - 1)}>Decrement</button>
        </p>
        <p> {name}</p>
        <p>{gender}</p>
        <label>Name: </label>
        <input value={name} onChange={event => setName (event.target.value)} />
        <label>Gender: </label>
        <input
          value={gender}
          onChange={event => setGender (event.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
