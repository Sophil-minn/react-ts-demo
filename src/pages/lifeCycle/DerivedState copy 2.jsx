import React, { Component, useState } from 'react'


class EmailInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: props.email
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // Any time props.email changes, update state.
    if (nextProps.email !== prevState.email) {
      // this.setState({
      //   email: nextProps.email
      // });
      return false
    }
    return true
  }

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  componentWillReceiveProps(nextProps) {
    // This will erase any local state updates!
    // Do not do this.
    this.setState({ email: nextProps.email });
  }
}


export default function DerivedState(props) {

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
