import React from 'react'

export default function BlogPostCell(props: { data: string}) {
    const { data } = props;
    return (
      <div>BlogPost: {data} </div>
    );
}