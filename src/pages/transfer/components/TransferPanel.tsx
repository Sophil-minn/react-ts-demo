import { Checkbox } from 'antd';
import React, { useState }  from 'react'
import {
  DownOutlined
} from '@ant-design/icons';
import { Button, Popover } from 'antd';
import { HeaderDiv } from '../styled';
import NoData from './NoData';
import List from './List';
import { TransferPanelProps, ItemPorps } from '../types';

function TransferPanel(props: TransferPanelProps) {
  const { onSelect, dataSource, setValue, value, title, selectAll, unSelectAll} = props;
  const indeterminate: boolean = !!value?.length && value?.length !== dataSource.length ;
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const renderHeader = () => {
    const onCheckAllChange = () => {
      setCheckAll((pre: boolean) => !pre);
    };
    const toSelectAll = () => {
      setCheckAll(true);
      selectAll();
      const newValue = dataSource.map((v: ItemPorps) => v.id);
      setValue(newValue);
    }
    const toUnSelectAll = () => {
      setCheckAll(false);
      unSelectAll();
    }

    const content = (
      <div>
        <p><Button onClick={toSelectAll}>全选所有</Button></p>
        <p><Button  onClick={toUnSelectAll}>反选当页</Button></p>
      </div>
    );

    const numberShow = value.length ? `${value.length}/${dataSource.length}` : dataSource.length;
    return (
      <HeaderDiv className="ant-transfer-list-header">
        <div>
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} >
          <Popover content={content}>
            <DownOutlined />
          </Popover>
          {numberShow}项
        </Checkbox>
        </div>
        <div>{title}</div>
      </HeaderDiv>
    );
  }

  const Item = (props: ItemPorps) => {
    const { id, content } = props;
    const toOnSelect = () => {
      let newValue = [...value];
      if (!value.includes(id)) {
        newValue = [...value, id]
      } else {
        newValue = newValue.filter(x => id !== x);
      }
      setValue(newValue);
      onSelect(id, newValue);
    }
    return (<li><Checkbox checked={value.includes(id)}  onChange={toOnSelect} />{content}</li>);
  } 

   const renderList = () => {
    if (!dataSource || dataSource.length === 0) {
      return <NoData />
    }
    const list = dataSource.map((v: ItemPorps) => <Item key={v.id} {...v} />);
    return <List list={list} />;
  }

  return (
    <div className='ant-transfer-list'>
      {renderHeader()}
      {renderList()}
    </div>
  )
}

export default TransferPanel