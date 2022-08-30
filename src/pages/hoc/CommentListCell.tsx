import React from 'react'

const Comment = (props: { comment: string; }) => {
  const { comment } = props;
  return <div>{comment}</div>
}
function CommentListCell(props: any) {
  const { data = [] } = props;
  return data.map((v: string, index: number) => <Comment key={index} comment={v} />);
}

export default CommentListCell;