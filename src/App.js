import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Users from './Users';
import Posts from './Posts';
import OneUser from './OneUser';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: ['Jeff', 'Grant', 'Susan'],
      userPosts: {
        Jeff: [
          'I went to the store 2day',
          'I wonder what vegan cheese tastes like',
          'Where is Canada?'
        ],
        Grant: ['Sometimes I dream of pudding', 'What is it like to be cool'],
        Susan: [
          'Going live on instagram in 20 minutes',
          'Buy some stuff with my promo code'
        ]
      }
    };
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Route path='/' exact component={Home} />
          <Route
            path='/users'
            render={props => {
              return <Users userList={this.state.userList} {...props} />;
            }}
          />
          <Route
            path='/posts'
            render={props => {
              return (
                <Posts
                  postList={Object.values(this.state.userPosts)}
                  {...props}
                />
              );
            }}
          />
          <Route
            path='/users/:name'
            render={props => {
              return (
                <OneUser
                  postList={this.state.userPosts[props.match.params.name]}
                  {...props}
                />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
