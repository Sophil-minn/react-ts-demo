import React, { useCallback, useState } from 'react'

// 会发现即便 Counter 组件重新渲染时没有再给 count 重新赋初始值，但是 initCount 函数却会重复执行
const initCount = (c: number) => {
  console.log('initCount 执行');
  return c * 2;
};

function Counter() {
  const [count, setCount] = useState(initCount(0));
  return <p onClick={() => setCount(count + 1)}>clicked {count} times</p>;
}

function Counter2() {
  const [count, setCount] = useState(() => initCount(0));
  return <p onClick={() => setCount(count + 1)}>clicked {count} times</p>;
}

function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback((node: any) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref] as any;
}

function MeasureExample2() {
  const [rect, ref] = useClientRect();
  return (
    <>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null &&
        <h2>The above header is {Math.round(rect.height)}px tall</h2>
      }
      <Counter />
      <Counter2 />
    </>
  );
}



export default MeasureExample2;