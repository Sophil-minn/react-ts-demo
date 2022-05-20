import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'

const initPerson = { name: '小明' };

const reducer = function (state: { name: any; }, action: { type: any; payload?: any; }) {
  switch (action.type) {
    case 'CHANGE':
      console.log(initPerson, action, 'initPerson')
      // 改变了 state 的属性，导致初始值 initPerson 发生了变化，
      // 所以之后 RESET，即使返回了 initPerson``，但是name 值依然是小红。
      state.name = action.payload;
      return { ...state };
    case 'RESET':
      return initPerson;
    default:
      return state;
  }
};

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count: ', count);

    return () => {
      console.log('component will unmount')
    }
  }, []);

  return <p onClick={() => setCount(count + 1)}>clicked {count} times</p>;
}

function Counter2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = function () {
      console.log('count: ', count);
    }
    window.addEventListener('click', handleClick, false)
  });

  return <p onClick={() => setCount(count + 1)}>clicked {count} times</p>;
}

function Counter3() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    // 将最新 state 设置给 countRef.current
    countRef.current = count;
    const handleClick = function () {
      console.log('count: ', countRef.current);
    };
    window.addEventListener('click', handleClick, false);
  });

  return <p onClick={() => setCount(count + 1)}>clicked {count} times</p>;
}

class Model {
  [x: string]: never[];
  constructor() {
    console.log('创建 Model');
    this.data = [];
  }
}

function Counter4() {
  const [count, setCount] = useState(0);
  const countRef = useRef(new Model());

  return <p onClick={() => setCount(count + 1)}>clicked {count} times</p>;
}


function Counter5() {
  const [count, setCount] = useState(0);
  const [model] = useState(() => new Model());
  const countRef = useRef(model);

  return <p onClick={() => setCount(count + 1)}>clicked {count} times</p>;
}



function StateTest() {
  // const [count, setCount] = useState(0);
  // const [countD, dispatch] = useReducer((x: any, payload: any) => x + payload, 0);
  const [person, dispatch] = useReducer(reducer, initPerson);
  const [value, setValue] = useState('小红');

  const handleChange = useCallback(
    (e: { target: { value: React.SetStateAction<string>; }; }) => setValue(e.target.value), []);

  const handleChangeClick = useCallback(
    () => dispatch({ type: 'CHANGE', payload: value }
    ), [value]);

  const handleResetClick = useCallback(
    () => dispatch({ type: 'RESET' }
    ), []);


  return (
    <div>
      {/* step: 2
      <p onClick={() => { setCount(count + 1); setCount(count + 2); }}> clicked {count} times </p>
      step: 3
      <p onClick={() => { dispatch(1); dispatch(2); }}  >  clicked {countD} times  </p> */}
      <p>name: {person.name}</p>
      <input type="text" value={value} onChange={handleChange} />
      <br />
      <br />
      <button onClick={handleChangeClick}>修改</button> |{' '}
      <button onClick={handleResetClick}>重置</button>
      <Counter />
      <Counter2 />
      <Counter3 />
      <Counter4 />
      <Counter5 />
    </div>

  );
}

export default StateTest