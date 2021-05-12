import * as actionTypes from './actionTypes';
import { ActionInterface, ReducerInterface } from './interfaces';

const initialState: ReducerInterface = {
  isSpinning: false,
  firstReelData: undefined,
  secondReelData: undefined,
  thirdReelData: undefined,
};

const reducer = (
  state: ReducerInterface = initialState,
  action: ActionInterface,
): ReducerInterface => {
  switch (action.type) {
    case actionTypes.START_SPIN:
      return {
        ...state,
        isSpinning: true,
      };
    case actionTypes.SET_FIRST_REEL_DATA:
      return {
        ...state,
        firstReelData: action.payload,
      };
    case actionTypes.SET_SECOND_REEL_DATA:
      return {
        ...state,
        secondReelData: action.payload,
      };
    case actionTypes.SET_THIRD_REEL_DATA:
      return {
        ...state,
        thirdReelData: action.payload,
        isSpinning: false,
      };
    default:
      return state;
  }
};

export default reducer;
