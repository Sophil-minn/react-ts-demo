import React, { useState } from 'react'
import TransferPanel from './components/TransferPanel'
import { LEFT, MOCK_DATA_LIST, RIGHT } from './const';
import 'antd/dist/antd.css'; 
import { Button } from 'antd';
import { RightOutlined, LeftOutlined} from '@ant-design/icons';
import { directionType, ItemPorps } from './types';


function Index() {
  // 左边选中的值
  const [leftValue, setLeftValue] = useState<string[]>([]);
  // 右边选中的值
  const [rightValue, setRightValue] = useState<string[]>([]);
  const [leftDataSource, setLeftDataSource] = useState<ItemPorps[]>(MOCK_DATA_LIST);
  const [rightDataSource, setRightDataSource] = useState<ItemPorps[]>([]);

  const handleMoveItem = (direction: directionType) => {
    if (direction === RIGHT) {
      const leftList = leftDataSource.filter(item => !leftValue.includes(item.id));
      const lastestValue = leftList.map(v => v.id);
      const rightList = MOCK_DATA_LIST.filter(item => !lastestValue.includes(item.id));
      // 移动到右边后,左边的选中的值清空
      setLeftValue([]);
      setLeftDataSource(leftList);
      setRightDataSource(rightList);
    }
    if (direction === LEFT) {
      const rightList = rightDataSource.filter(item => !rightValue.includes(item.id));
      const lastestValue = rightList.map(v => v.id);
      const leftList = MOCK_DATA_LIST.filter(item => !lastestValue.includes(item.id));
      // 移动到左边后,右边的选中的值清空
      setRightValue([]);
      setLeftDataSource(leftList);
      setRightDataSource(rightList);
    }
  }

  const renderCenter = () => {
    return (
      <div className='ant-transfer-operation'>
        <Button key="l2r" onClick={() => handleMoveItem(RIGHT)}><RightOutlined /></Button>
        <Button key="r2l" onClick={() => handleMoveItem(LEFT)}><LeftOutlined /></Button>
      </div>
    );
  }

  const selectAll = (position: any) => {
    console.log(position);
    if (position === LEFT) {
      const selected = leftDataSource.map(v => v.id);
      setLeftValue(selected);
    } else {
      const selected = rightDataSource.map(v => v.id);
      setRightValue(selected);
    }
  }
  const unSelectAll = (position: any) => {
    if (position === LEFT) {
      setLeftValue([]);
    } else {
      setRightValue([]);
    }
  }

  const onSelect = (id: string, selectValue: string[], type: string) => {
    console.log(id,selectValue, type, 111111);
  }

  return (
    <div className='ant-transfer'>
      <TransferPanel 
        selectAll={() => selectAll(LEFT)} 
        unSelectAll={() => unSelectAll(LEFT)} 
        title="source" 
        value={leftValue}
        setValue={setLeftValue}
        onSelect={(id: string, selectValue: string[]) => onSelect(id, selectValue, LEFT)}
        dataSource={leftDataSource} />
      {renderCenter()}
      <TransferPanel 
        selectAll={() => selectAll(RIGHT)} 
        unSelectAll={() => unSelectAll(RIGHT)} 
        title="target" 
        value={rightValue}
        setValue={setRightValue}
        onSelect={(id: string, selectValue: string[]) => onSelect(id, selectValue, RIGHT)}
        dataSource={rightDataSource} 
      />
    </div>
  )
}

export default Index