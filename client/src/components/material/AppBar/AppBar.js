import React from 'react';
import {default as AppBarMui} from '@material-ui/core/AppBar';

const AppBar = (props) => {
  const {
    children,
    ...other
  } = props;

  return (
    <AppBarMui {...other}>
      {children}
    </AppBarMui>
  );
}

AppBar.propTypes = {
};

export default AppBar;