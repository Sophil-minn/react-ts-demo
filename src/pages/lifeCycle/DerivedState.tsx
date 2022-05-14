import { Component, useState } from 'react'

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
      return false
    }
    return true
  }

  // 只有当props.email发生改变时才去执行更新，以此来避免状态被清
  // componentWillReceiveProps(nextProps: any) {
  //   // Any time props.email changes, update state.
  //   if (nextProps.email !== this.props.email) {
  //     this.setState({
  //       email: nextProps.email
  //     });
  //   }
  // }


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


// 完全受控组件
function EmailInput2(props: any) {
  return <input onChange={props.onChange} value={props.email} />;
}


class EmailInput3 extends Component<any, any> {
  state = { email: this.props.defaultEmail };

  handleChange = (event: { target: { value: any; }; }) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }
}

// 有"key"的完全非受控组件
class EmailInput4 extends Component<any, any> {
  constructor(props: { defaultEmail: any; userID: any; }) {
    super(props);
    this.state = {
      email: props.defaultEmail,
      prevPropsUserID: props.userID
    }
  }


  static getDerivedStateFromProps(props: { userID: any; defaultEmail: any; }, state: { prevPropsUserID: any; }) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if (props.userID !== state.prevPropsUserID) {
      return {
        prevPropsUserID: props.userID,
        email: props.defaultEmail
      };
    }
    return null;
  }
  handleChange = (event: { target: { value: any; }; }) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }

  // ...
}



export default function DerivedState(props: any) {
  const [count, setCount] = useState(9);
  const onChange = () => {
    setCount(pre => pre + 1);
  }
  return (
    <div>
      <h2>反模式：无条件得使用props对state赋值</h2>
      组件的父类重新渲染，我们在input输入的任何东西都将丢失
      <EmailInput email="1056640663" />
      <h5>EmailInput2</h5>
      <EmailInput2 email={count} onChange={onChange} />
      <h5>EmailInput3</h5>
      <EmailInput3 defaultEmail="3333" key={props?.user?.id} />
      <h5>EmailInput4</h5>
      <EmailInput4 defaultEmail="44444" key={props?.user?.id} />

      <h4>count: {count} </h4>
      无条件得使用props对state赋值是一个坏主意
      <button onClick={() => setCount(pre => pre + 1)}>点我</button>

      <h3>回顾</h3>
      <div>
        回顾一下，在设计组件时，最重要的是决定它的数据是否需要被控制。

        与其尝试在状态中镜像一个属性值，不如让组件被控制，并在某些父组件的状态中合并两个不同的值。例如，与其让子组件既接收一个“committed”属性又要维护一个“draft”的状态，不如让父级组件同时管理两个状态——state.committedValue和state.draftValue——直接控制子组件的值。这使得数据流更加清晰和可预测。

        对于非受控的组件，如果您试图在某特定的属性（通常是ID）更改时重置状态，那么您有几个选项：

        推荐：如果要重置全部内部状态，使用key特性
        备选 1：只重置某些特定的状态字段，关注特定属性的更改（例如props.userID)。
        备选 2：您还可以考虑使用refs调用一个命令式实例方法。</div>
    </div>
  )
}
