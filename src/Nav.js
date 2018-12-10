import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav className='navbar'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/users'>Users</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
    </nav>
  );
}

export default Nav;
