import * as actionTypes from './actionTypes';
import { DispatchType, ActionInterface, ReelDataInterface } from './interfaces';
import getRandomReelData from '../util/getRandomReelData';

export const startSpin = (): ActionInterface => {
  const action = {
    type: actionTypes.START_SPIN,
  };

  return action;
};

export const setFirstReelDataData = (payload: ReelDataInterface): ActionInterface => {
  const action = {
    type: actionTypes.SET_FIRST_REEL_DATA,
    payload,
  };

  return action;
};
export const setSecondReelDataData = (payload: ReelDataInterface): ActionInterface => {
  const action = {
    type: actionTypes.SET_SECOND_REEL_DATA,
    payload,
  };

  return action;
};
export const setThirdReelDataData = (payload: ReelDataInterface): ActionInterface => {
  const action = {
    type: actionTypes.SET_THIRD_REEL_DATA,
    payload,
  };

  return action;
};

export const onSpin = () => (dispatch: DispatchType) => {
  dispatch(startSpin());

  setTimeout(() => {
    dispatch(setFirstReelDataData(getRandomReelData()));
  }, 1000);

  setTimeout(() => {
    dispatch(setSecondReelDataData(getRandomReelData()));
  }, 1500);

  setTimeout(() => {
    dispatch(setThirdReelDataData(getRandomReelData()));
  }, 2000);
};
