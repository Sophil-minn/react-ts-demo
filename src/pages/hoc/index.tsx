import CommentList from "./CommentList"
import CommentListCell from "./CommentListCell"
import BlogPostCell from "./BlogPostCell"
import withSubscription from "./withSubscription"

const DataSource = {
  getComments: () => {
    return [3333, 44444];
  },
  getBlogPost: (id: string) => {
    return `${id} 我的博客 -----`;
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

  const worker = new Worker('./worker.js');
   // 通过onmessage接收消息
   worker.onmessage = function(e) {
    console.log(e, e.data, 11111);
  };

  return (
    <div>
      {/* <CommentList />
      <BlogPost /> */}
      <CommentListWithSubscription />
      {/* <BlogPost2 id={11} /> */}
      <BlogPostWithSubscription id={99} />
      {/* <input type="text" id="ipt" value="" onChange={value => {
        // 通过postMessage发送消息
        worker.postMessage({ number: value });
      }}/>
      <div id="result"></div> */}
    </div>
  )
}

export default Index