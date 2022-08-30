import React from 'react'


class Index extends React.Component{
  static say: () => void
  render(){
    return <div> hello,world  </div>
  }
}
Index.say = function(){
  console.log('my name is alien')
}
function HOC(Component: any) {
  return class wrapComponent extends React.Component{
     static say(say: any, arg1: number) {
       throw new Error('Method not implemented.')
     }
     render(){
       return <Component { ...this.props } { ...this.state } />
     }
  }
}


export default function BlogPostCell(props: { data: string}) {
    const { data } = props;
    const newIndex =  HOC(Index) 
    console.log(newIndex?.say, 9999999000)
    return (
      <div>BlogPost: {data} </div>
    );
}