import React from 'react';

function Posts(props) {
  let newArray = props.postList.map(array => {
    return array.map(item => {
      return <li>{item}</li>;
    });
  });
  console.log(newArray.flat());
  return (
    <div>
      <h1>Posts</h1>
      <ul className='posts'>{newArray.flat()}</ul>
    </div>
  );
}

export default Posts;
