import React from 'react';
import {default as IconButtonMui } from '@material-ui/core/IconButton';

const IconButton = (props) => {
  const {
    children,
    ...other
  } = props;

  return (
    <IconButtonMui {...other}>
      {children}
    </IconButtonMui>
  );
}

IconButton.propTypes = {
};

export default IconButton;