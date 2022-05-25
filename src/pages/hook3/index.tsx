import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

function ExpensiveTree(props: { onSubmit: any; }) {
  const { onSubmit } = props;
  return <div onClick={onSubmit}>click me</div>
}

function Form() {
  const [text, updateText] = useState('');
  const textRef = useRef<any>();

  useEffect(() => {
    textRef.current = text; // 把它写入 ref
  });

  const handleSubmit = useCallback(() => {
    const currentText = textRef.current; // 从 ref 读取它
    alert(currentText);
  }, [textRef]); // 不要像 [text] 那样重新创建 handleSubmit

  return (
    <>
      <input value={text} onChange={e => updateText(e.target.value)} />
      <ExpensiveTree onSubmit={handleSubmit} />
    </>
  );
}

function Comment() {
  const [count, setCount] = useState(0);
  const handleAdd = () => setCount(count + 1);
  const handleSyncAdd = () => {
    setTimeout(() => {
      // 获取的是闭包中的state
      console.log(count, 'count');
      // setCount(count + 1);
      // 改成回调函数更新，每次回调函数执行时会接收之前的state，而不是闭包中的state
      setCount(count => count + 1);
    }, 1000);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>增加</button>
      <button onClick={handleSyncAdd}>异步增加</button>
    </div>
  );
}

function Child({ callback }: { callback: any }) {
  const [count, setCount] = useState(() => callback());
  useEffect(() => {
    console.log(123);
    setCount(callback());
  }, [callback]);
  return <div>
    {count}
  </div>
}

function Parent() {
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(1)
  const handleCountAdd = () => setCount(count + 1)
  const handlePriceAdd = () => setPrice(price + 1)
  // 使用useMemo在count和price改变时自动计算总价
  const all = useMemo(() => count * price, [count, price])
  const callback = () => {
    // useCallback是缓存的函数，父组件给子组件传递参数为普通函数时，
    // 父组件每次更新子组件都会更新，但是大部分情况子组件更新是没必要的，
    // 这时候我们用useCallback来定义函数，并把这个函数传递给子组件，子组件就会根据依赖项再更新了
    console.log('callback 函数没有被useCallback包裹 ', count);
    return count;
  }
  const callback2 = useCallback(() => {
    // useCallback是缓存的函数，父组件给子组件传递参数为普通函数时，
    // 父组件每次更新子组件都会更新，但是大部分情况子组件更新是没必要的，
    // 这时候我们用useCallback来定义函数，并把这个函数传递给子组件，子组件就会根据依赖项再更新了
    console.log('callback 使用useCallback', count);
    return count;
  }, [count]);
  return (
    <div>
      parent, {count}
      <button onClick={handleCountAdd}>增加数量</button>
      <button onClick={handlePriceAdd}>增加价格</button>
      <p>count: {count}, price: {price} all: {all}</p>
      <h3>callback</h3>
      <Child callback={callback} />
      <Child callback={callback2} />
    </div>
  )
}

function index() {
  return (
    <div>
      <h4>我们推荐 在 context 中向下传递 dispatch 而非在 props 中使用独立的回调。</h4>
      <div>在某些罕见场景中，你可能会需要用 useCallback 记住一个回调，但由于内部函数必须经常重新创建，记忆效果不是很好。如果你想要记住的函数是一个事件处理器并且在渲染期间没有被用到，你可以 把 ref 当做实例变量 来用，并手动把最后提交的值保存在它当中：</div>
      <Form />
      Comment
      <Comment />
      Parent
      <Parent />
    </div>
  )
}

export default index