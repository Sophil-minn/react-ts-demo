import React, { ReactNode } from 'react'

interface ListProps {
  list: ReactNode,
}

function List(props: ListProps) {
  const { list } = props;
  return (
    <div className='ant-transfer-list-body'>
      <ul className='ant-transfer-list-content'>
        {list}
      </ul>
    </div>
  )
}

export default List