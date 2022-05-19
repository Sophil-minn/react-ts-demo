import React, { useCallback, useEffect, useRef, useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1); // 这个 effect 依赖于 `count` state
    }, 1000);
    return () => clearInterval(id);
  }, [count]); // 🔴 Bug: `count` 没有被指定为依赖

  return <h1>{count}</h1>;
}

function Counter2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1); // ✅ 在这不依赖于外部的 `count` 变量
    }, 1000);
    return () => clearInterval(id);
  }, []); // ✅ 我们的 effect 不使用组件作用域中的任何变量

  return <h1>{count}</h1>;
}


function Example(props: any) {
  // 把最新的 props 保存在一个 ref 中
  const latestProps = useRef(props);
  useEffect(() => {
    latestProps.current = props;
  });

  useEffect(() => {
    function tick() {
      // 在任何时候读取最新的 props
      // console.log(latestProps.current);
    }

    // const id = setInterval(tick, 1000);
    // return () => clearInterval(id);
  }, []); // 这个 effect 从不会重新执行
  return <span>props: minn</span>
}

function MeasureExample() {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback((node: any) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>

      <div>获取 DOM 节点的位置或是大小的基本方式是使用 callback ref。
        每当 ref 被附加到一个另一个节点，React 就会调用 callback</div>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>

      <h3>Counter</h3>
      <Counter />
      <h3>Counter2</h3>
      <Counter2 />
      <h3>Example</h3>
      <Example />


    </>
  );
}

export default MeasureExample
