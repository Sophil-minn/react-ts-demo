import React from "react";

const DataSource = {
  getBlogPost: () => {
    return " 我的博客";
  },
  addChangeListener: (callback: () => any) => {
    callback&&callback();
  },
  removeChangeListener: (callback: () => any) => {
    callback&&callback();
  }
}

const Comment = (props: { comment: any[]; }) => {
  const { comment } = props;
  return <div>{comment}</div>
}

class BlogPost extends React.Component <{id: string}, {comments: any}>{
  constructor(props: any ) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // 假设 "DataSource" 是个全局范围内的数据源变量
      blogPost: DataSource.getBlogPost(props.id)
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
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment: any[]) => (
          <Comment comment={comment} />
        ))}
      </div>
    );
  }
}
export default BlogPost;