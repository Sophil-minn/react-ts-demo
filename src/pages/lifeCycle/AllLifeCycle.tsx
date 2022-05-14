import React, { Component } from 'react'

export default class AllLifeCycle extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { propertyName: '', name: 'mmm' }
    this.handleEvent = this.handleEvent.bind(this)
  }

  // Rarely Used
  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    console.log('getDerivedStateFromProps');
    console.log(nextProps, 'nextProps, prevState', prevState);
    console.log('getDerivedStateFromProps');
    // return 'getDerivedStateFromProps'
    return 9999
  } // Rarely Used

  static getDerivedStateFromError(error: any) {
    console.log('getDerivedStateFromError');
    console.log(error, 'error');
    console.log('getDerivedStateFromError');
  } // Rarely Used

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps: any, nextState: any, nextContext: boolean) {
    console.log('getDerivedStateFromError');
    console.log(nextProps, 'nextProps', nextState, 'nextState', nextContext, 'nextContext');
    console.log('getDerivedStateFromError');
    return nextContext;
  } // Rarely Used

  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log('getSnapshotBeforeUpdate');
    console.log(prevProps, 'prevProps, prevState', prevState);
    console.log('getSnapshotBeforeUpdate');
    return ' snapshot;'
  } // Rarely Used

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    console.log('componentDidUpdate');
    if (prevState.name !== this.state.name) {
      this.handler()
    }

    console.log(prevProps, 'prevProps', prevState, 'prevState', snapshot, 'snapshot');
    console.log('componentDidUpdate');

  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log('componentDidCatch');
    console.log(error, 'error, errorInfo', errorInfo);
    console.log('componentDidCatch');
  } // Rarely Used

  // UNSAFE_componentWillMount() {
  //   console.log('UNSAFE_componentWillMount');
  // } // Legacy

  // UNSAFE_componentWillReceiveProps(nextProps: any, nextContext: any) {
  //   console.log('UNSAFE_componentWillReceiveProps');
  //   console.log(nextProps, 'nextProps, nextContext', nextContext);
  //   console.log('UNSAFE_componentWillReceiveProps');
  // } // Legacy

  // UNSAFE_componentWillUpdate(nextProps: any, nextState: any, nextContext: any) {
  //   console.log('UNSAFE_componentWillUpdate');
  //   console.log(nextProps, 'nextProps', nextState, 'nextState', nextContext, 'nextContext');
  //   console.log('UNSAFE_componentWillUpdate');
  // } // Legacy

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() {
    console.log('componentDidUpdate');
  }

  // Class Properties (Stage 3 Proposal)
  handler = () => {
    console.log('componentDidUpdate');
    this.setState({ date: "new Date()" })
  }

  render() {
    return (
      <div>
        生命周期 全部
        <button onClick={this.handleEvent}> handleEvent</button>
        <button onClick={this.handler}> handler</button>
      </div>
    );
  }
}