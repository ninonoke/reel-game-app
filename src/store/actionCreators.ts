import * as actionTypes from './actionTypes';

export const startSpin = () => {
  const action = {
    type: actionTypes.START_SPIN,
  };

  return action;
};

export const endSpin = () => {
  const action = {
    type: actionTypes.END_SPIN,
  };

  return action;
};
