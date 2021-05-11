import * as actionTypes from './actionTypes';
import { ActionInterface, ReducerInterface } from './interfaces';

const initialState: ReducerInterface = {
  isSpinning: false,
};

const reducer = (
  state: ReducerInterface = initialState,
  action: ActionInterface,
) => {
  switch (action.type) {
    case actionTypes.START_SPIN:
      return {
        ...state,
        isSpinning: true,
      };
    case actionTypes.END_SPIN:

      return {
        ...state,
        isSpinning: false,
      };
    default:
      return state;
  }
};

export default reducer;
