import CommentList from "./CommentList"
import CommentListCell from "./CommentListCell"
import BlogPostCell from "./BlogPostCell"
import withSubscription from "./withSubscription"

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

function Index() {
  const CommentListWithSubscription = withSubscription(
    CommentListCell,
    () => DataSource.getComments()
  );
  
  // const BlogPost2 = withSubscription(
  //   BlogPost,
  //   (props: {id: string}) => DataSource.getBlogPost(props.id)
  // );
  const BlogPostWithSubscription = withSubscription(
    BlogPostCell,
    (DataSource: any, props: {id: string}) => DataSource.getBlogPost(props.id)
  );

  return (
    <div>
      {/* <CommentList />
      <BlogPost /> */}
      <CommentListWithSubscription />
      {/* <BlogPost2 id={11} /> */}
      <BlogPostWithSubscription id={99} />
    </div>
  )
}

export default Index