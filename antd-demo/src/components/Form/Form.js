import React, {Component, useState} from 'react'
import { Form, Row, Col, Input, Button, DatePicker, Select } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { toggleMessage } from '../../actions/toggle'
import cities from '../../data/Cities' 
import './style.css';

const { RangePicker } = DatePicker;
const { Option } = Select;

const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please select time!',
    },
  ],
};

const guestsNumber = [1,2,3,4,5,6,7,8,9,10]



const SearchForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>
        <Col>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Where are you going?"
            optionFilterProp="children"
            // onChange={onChange}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {cities.map(country => (
              country[Object.keys(country)[0]].map(city => (
                <Option value={`${Object.keys(country)[0]}, ${city}`} >{`${Object.keys(country)[0]}, ${city}`}</Option>
              ))
            ))}
          </Select>
        </Col>
        <Col>
          <Form.Item name="range-picker" label="Check in - Check out" {...rangeConfig}>
            <RangePicker />
          </Form.Item>
        </Col>
        <Col>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="How many guests?"
            optionFilterProp="children"
            // onChange={onChange}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {
              guestsNumber.map(number => (
                <Option value={number}>{number}</Option>
              ))
            }            
          </Select>
        </Col>
      </Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};


const mapStateToProps = (state) => ({
    messageVisibility: state.message.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleMessage,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);