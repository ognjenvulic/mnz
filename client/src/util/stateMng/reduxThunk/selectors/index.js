import { createSelector } from 'reselect';

const commonSelector = (state) => (state.common ? state.common : {});

export const authUserSelector = createSelector(
  commonSelector,
  (common) => {
    return common.authUser;
  }
);

