import React, { useRef, useState } from 'react'
import { Form, Input, Select, Grid, Field } from '@alifd/next';
import { FusionForm } from '../../styleDiv/fusion'
import FormSearch from './FormSearch';
import { Items } from '../types';

const FormItem = Form.Item;
const { Row, Col } = Grid;

const formItemLayout = {
  labelCol: { xxs: 4, l: 4 },
  wrapperCol: { xxs: 20, l: 16 }
};


interface ValueProps {
  city?: string;
  country?: string;
}

function Index() {
  const formRef = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState<any>({
    city: '杭州', country: '英国'
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const field = Field.useField({
    onChange(key, value) {
      if (key === 'country') {
        setValue({ [key]: value });
      }
      setValue((pre: any) => ({ ...pre, [key]: value }));
    }
  });
  const { init, reset, getError } = field;

  const countries: Items[] = [
    { value: 'China', label: '中国' },
    { value: 'United States', label: '美国' },
    { value: 'Japan', label: '日本' },
    { value: 'South Korea', label: '韩国' },
    { value: 'Thailand', label: '泰国' },
  ];

  const cities = {
    "China": [
      { value: 'BeiJing', label: '北京' },
      { value: 'ShangHai', label: '上海' },
      { value: 'ShenZhen', label: '深圳' },
      { value: 'HangZhou', label: '杭州' },
    ],
    "United States": [
      { value: 'BeiJing', label: 'U1' },
      { value: 'ShangHai', label: 'U2' },
      { value: 'ShenZhen', label: 'U3' },
      { value: 'HangZhou', label: 'U4' },
    ],
    "Japan": [
      { value: 'BeiJing', label: 'J1' },
      { value: 'ShangHai', label: 'J2' },
      { value: 'ShenZhen', label: 'J3' },/*  */
      { value: 'HangZhou', label: 'J4' },
    ],
    "Thailand": [
      { value: 'BeiJing', label: 'T1' },
      { value: 'ShangHai', label: 'T2' },
      { value: 'ShenZhen', label: 'T3' },
      { value: 'HangZhou', label: 'T4' },
    ],
  };



  return (
    <div>
      <FormSearch
        ref={formRef}
        formValue={value}
        field={field}
        countries={countries}
        cities={cities}
      />

    </div>
  )
}

export default Index
