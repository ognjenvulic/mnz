import React, { useState, useEffect } from 'react';
import '../styles/main.scss';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import PostsTimeline from './PostsTimeline/PostsTimeline';
import Playground from './Playground/Playground';
import { connect } from 'react-redux';
import * as actions from '../util/stateMng/reduxThunk/actions';
import { authUserSelector } from '../util/stateMng/reduxThunk/selectors';

function App(props) {
  const { fetchUser } = props;

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className='app'>
        <Switch>
          <Route path='/playground' component={Playground} />
          <Route path='/posts' component={PostsTimeline} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

App.propTypes = {};

App.defaultProps = {};

const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  authUser: authUserSelector(state),
});

const mapDispatchToProps = {
  // ... normally is an object full of action creators
  ...actions,
};

// const mapStateToProps = (state) => {
//   return {
//     authUser: commonSelectors.authUserSelector(state)
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
