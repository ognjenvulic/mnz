
import React from 'react';
import ReduxThunkStore from './reduxThunk/store';

export default function StateManagementProvider(props) {
  const {
    children
  } = props;

  return (
    <ReduxThunkStore>
      {children}
    </ReduxThunkStore>
  )
}