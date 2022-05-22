import React, { useCallback, useEffect, useRef, useState } from 'react'

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

function index() {
  return (
    <div>
      <h4>我们推荐 在 context 中向下传递 dispatch 而非在 props 中使用独立的回调。</h4>
      <div>在某些罕见场景中，你可能会需要用 useCallback 记住一个回调，但由于内部函数必须经常重新创建，记忆效果不是很好。如果你想要记住的函数是一个事件处理器并且在渲染期间没有被用到，你可以 把 ref 当做实例变量 来用，并手动把最后提交的值保存在它当中：</div>
      <Form />
      Comment
      <Comment />
    </div>
  )
}

export default index