import React from 'react';
import '../styles/main.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header';
import PostsTimeline from './PostsTimeline/PostsTimeline';
import Playground from './Playground/Playground';
import { connect } from 'react-redux';
import * as actions from '../util/stateMng/reduxThunk/actions';
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <React.Fragment>
      <Header/>
      <div className="app">
        <BrowserRouter>
          <Route path="/playground" component={Playground}/>
          <Route path="/posts" component={PostsTimeline}/>
        </BrowserRouter>
      </div>
      </React.Fragment>
    );
  };
};

export default connect(null, actions)(App);