import React from "react";

const DataSource = {
  getBlogPost: (id: string) => {
    return `${id} 我的博客`;
  },
  addChangeListener: (callback: () => any) => {
    callback && callback();
  },
  removeChangeListener: (callback: () => any) => {
    callback && callback();
  }
}

const TextBlock = (props: { text?: string }) => {
  const { text } = props;
  return <div>{text}</div>
}

class BlogPost extends React.Component < any, {blogPost?: string, comments?: string[]}>{
  constructor(props: any ) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // 假设 "DataSource" 是个全局范围内的数据源变量
      blogPost: DataSource.getBlogPost(props.id),
    };
  }

  componentDidMount() {
    // 订阅更改
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // 清除订阅
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // 当数据源更新时，更新组件状态
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return (
      <TextBlock text={this.state.blogPost} />
    );
  }
}
export default BlogPost;