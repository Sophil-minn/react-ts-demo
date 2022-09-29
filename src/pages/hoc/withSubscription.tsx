import React from 'react'

const DataSource = {
  getComments: () => {
    return [1111, 222];
  },
  getBlogPost: (id: string) => {
    return `${id} 我的博客`;
  },
  addChangeListener: (callback: () => any) => {
    callback&&callback();
  },
  removeChangeListener: (callback: () => any) => {
    callback&&callback();
  }
}

export default function withSubscription(WrappedComponent: any, selectData: Function) {
  // ...并返回另一个组件...
  return class extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ...负责订阅相关的操作...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      console.log(this.state.data, 'this.state.data');
      console.log(this.props, 'this.props.999999999');
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
