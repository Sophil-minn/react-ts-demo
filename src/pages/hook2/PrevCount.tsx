import React, { useEffect, useRef, useState } from 'react'

function PrevCount() {
  const [count, setCount] = useState(0);

  // const prevCountRef = useRef();

  // useEffect(() => {
  //   prevCountRef.current = count as any;
  // });

  // const prevCount = prevCountRef.current;

  // 新增 
  const prevCount = usePrevious(count);
  const calculation = count + 100;
  const prevCalculation = usePrevious(calculation);

  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>;
      <h1>Now: {count}, before: {prevCalculation}</h1>;

      <button onClick={() => setCount(pre => pre + 1)}>点我 点我</button>
    </div>
  )
}

function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default PrevCount