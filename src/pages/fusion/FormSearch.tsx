import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { Form, Input, Select, Grid, Field } from '@alifd/next';
import { FusionForm } from '../../styleDiv/fusion'
import { Items } from '../types';

const FormItem = Form.Item;
const { Row, Col } = Grid;

const formItemLayout = {
  labelCol: { xxs: 4, l: 4 },
  wrapperCol: { xxs: 20, l: 16 }
};


interface Props {
  formValue: { country: string, city: string, testInput: string; },
  field: any;
  countries: Items[];
  cities: any;
}

function FormSearch(props: Props, ref: any) {
  const formRef = useRef(null);
  useImperativeHandle(ref, () => ({
    getData: () => {
      console.log(1213);
      console.log(formRef.current, 'formRefformRef');
      field.getValues();
    }
  }));
  const { field, formValue, countries, cities } = props;
  const { init } = field;
  const { country, city, testInput } = formValue;
  const cityList = cities[country];
  console.log(ref, 'ref');
  return (
    <FusionForm>
      <Form {...formItemLayout} field={field} ref={formRef}>
        <Row gutter="4">
          <Col span={6}>
            <FormItem label="Country:" name="country">
              <Select
                {...init("country")}
                value={country}
                placeholder="Please select a country"
                style={{ width: "100%" }}
                dataSource={countries}
              />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Cities:" name="city">
              <Select
                {...init("city")}
                value={city}
                placeholder="Please select a city"
                style={{ width: "100%" }}
                dataSource={cityList || []}
              />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="input:" name="testInput">
              <Input
                {...init("testInput")}
                value={testInput}
              />
            </FormItem>
          </Col>
          <Col>
            <FormItem label=" ">
              <Form.Submit>查询</Form.Submit>
            </FormItem>
          </Col>
        </Row>

      </Form>
    </FusionForm>
  )
}

export default forwardRef(FormSearch)