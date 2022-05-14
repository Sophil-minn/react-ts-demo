import React, { Component, useState } from 'react'


class EmailInput extends Component<any, any> {

  constructor(props: { email: any; }) {
    super(props)
    this.state = {
      email: props.email
    }
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    // Any time props.email changes, update state.
    if (nextProps.email !== prevState.email) {
      this.setState({
        email: nextProps.email
      });
      return true
    }
    return false
  }

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }

  handleChange = (event: { target: { value: any; }; }) => {
    this.setState({ email: event.target.value });
  };

  componentWillReceiveProps(nextProps: { email: any; }) {
    // This will erase any local state updates!
    // Do not do this.
    this.setState({ email: nextProps.email });
  }
}


export default function DerivedState(props: any) {

  const [count, setCount] = useState(9);



  return (
    <div>
      <h2>反模式：无条件得使用props对state赋值</h2>
      组件的父类重新渲染，我们在input输入的任何东西都将丢失
      <EmailInput email="1056640663" />

      <h4>count: {count} </h4>
      无条件得使用props对state赋值是一个坏主意
      <button onClick={() => setCount(pre => pre + 1)}>点我</button>
    </div>
  )
}
