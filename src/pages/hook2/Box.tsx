import { useEffect, useState } from "react";

function Box() {
  const [state, setState] = useState({ left: 0, top: 0, width: 100, height: 100 });
  const { left } = state;

  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [size, setSize] = useState({ width: 100, height: 100 });

  useEffect(() => {
    function handleWindowMouseMove(e: { pageX: any; pageY: any; }) {
      // 展开 「...state」 以确保我们没有 「丢失」 width 和 height
      setState(state => ({ ...state, left: e.pageX, top: e.pageY }));
      setPosition({ left: e.pageX, top: e.pageY });

    }
    // 注意：这是个简化版的实现
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, []);

  return (
    <div>
      <h4>left, top, width, height</h4>
      <div>{left}</div>
      <div>{position.left}</div>
      <div>{size.width}</div>
    </div>
  );
  // ...
}

export default Box;