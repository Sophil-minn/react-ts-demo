import React, { useState } from 'react'

function ScrollView(props: { row: any }) {
  const { row } = props;
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevRow, setPrevRow] = useState(null);

  if (row !== prevRow) {
    // Row 自上次渲染以来发生过改变。更新 isScrollingDown。
    setIsScrollingDown(prevRow !== null && row > prevRow);
    setPrevRow(row);
  }

  return <div>{`Scrolling down: ${isScrollingDown}`}</div>;
}

export default ScrollView