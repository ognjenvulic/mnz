import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Header.scss';
import AppBar from '../material/AppBar/AppBar';
import Toolbar from '../material/Toolbar/Toolbar';
import IconButton from '../material/IconButton/IconButton';
import Icons, {IconName} from '../material/Icons/Icons';

class Header extends Component {

  renderContent() {
    switch (this.props.auth){ 
      case null:
        return;
      case false:
        return <li> <a href="/auth/google">Login Google</a> </li>;
      default:
        return <li> <a href="/auth/logout">Log out Google</a> </li>;
    }
  }

  render() {
    console.log(this.props);
    return (
      <AppBar position="static">
        <Toolbar>
          <a href="/">MNZ</a>
          <div className='grow' />
          <a href="/posts">Posts</a>
          <div className='grow' />
          <a href="/playground">Playground</a>
          <div className='grow' />
          <ul>
            {this.renderContent()}
            {/*<a href="/auth/google">Login Google</a>*/}
            {/*<IconButton*/}
              {/*edge="end"*/}
              {/*onClick={()=>{}}*/}
              {/*color="inherit">*/}
              {/*<Icons name={IconName.AccountCircle}/>*/}
            {/*</IconButton>*/}
          </ul>
        </Toolbar>
      </AppBar>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
