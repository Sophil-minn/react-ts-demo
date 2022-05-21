import React, { useEffect, useState } from 'react'

function useWindowPosition() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  useEffect(() => {
    function handleWindowMouseMove(e: { pageX: any; pageY: any; }) {
      // 展开 「...state」 以确保我们没有 「丢失」 width 和 height
      setPosition({ left: e.pageX, top: e.pageY });

    }
    // 注意：这是个简化版的实现
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, []);
  return position;
}

function Box2() {
  const position = useWindowPosition();
  const [size, setSize] = useState({ width: 100, height: 100 });
  return (
    <div>
      <div>{JSON.stringify(position)}</div>
      <div>{JSON.stringify(size)}</div>
    </div>
  )
}

export default Box2