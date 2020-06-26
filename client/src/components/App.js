import React from 'react';
import '../styles/main.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header';
import PostsTimeline from './PostsTimeline/PostsTimeline';
import { connect } from 'react-redux';
import * as actions from '../actions';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <React.Fragment>
      <Header/>
      <div className="app">
        <h1>Welcome to App from GIT - dev test</h1>
        <BrowserRouter>
          <Route path="/" component={PostsTimeline}/>
          <Route path="/posts" component={PostsTimeline}/>
        </BrowserRouter>
      </div>
      </React.Fragment>
    );
  };
};

export default connect(null, actions)(App);