import React from 'react';
import {default as ToolbarMui } from '@material-ui/core/Toolbar';

const Toolbar = (props) => {
  const {
    children,
    ...other
  } = props;

  return (
    <ToolbarMui {...other}>
      {children}
    </ToolbarMui>
  );
}

Toolbar.propTypes = {
};

export default Toolbar;