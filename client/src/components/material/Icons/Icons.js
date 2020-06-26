import React from 'react';
import PropTypes from 'prop-types';
import {default as AccountCircleMui } from '@material-ui/icons/AccountCircle';

export const IconName = {
  AccountCircle: 'AccountCircle'
}

const Icons = (props) => {
  const {
    children,
    ...other
  } = props;

  const Icon = (props) => {
    switch (props.name) {
      case (IconName.AccountCircle):
        return <AccountCircleMui/>;
      default:
        return <AccountCircleMui/>;
    };
  };

  return (
    <Icon {...other}>
      {children}
    </Icon>
  )
}

Icons.propTypes = {
  name: PropTypes.oneOf([
    IconName.AccountCircle
  ])
};

export default Icons;