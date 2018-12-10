import React from 'react';
import { Link } from 'react-router-dom';
function Users(props) {
  return (
    <div className='users-list'>
      <h1>Users</h1>
      <ul>
        {props.userList.map(item => {
          return (
            <li>
              <Link to={`/users/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
