import React from 'react';

function OneUser(props) {
  return (
    <div className='user'>
      <h3>{props.match.params.name}</h3>
      <ul className='userPosts posts'>
        {props.postList.map(post => {
          return <li>{post}</li>;
        })}
      </ul>
    </div>
  );
}

export default OneUser;
