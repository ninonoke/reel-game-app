import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { startSpin } from '../../store/actionCreators';
import { ReducerInterface } from '../../store/interfaces';
import './styles.scss';

const BottomBar:React.FC = () => {
  const isSpinning = useSelector(
    (state: ReducerInterface) => state.isSpinning,
    shallowEqual,
  );

  const dispatch: Dispatch<any> = useDispatch();

  const onStartSpin = useCallback(
    () => dispatch(startSpin()),
    [dispatch, startSpin],
  );

  return (
    <div className="bottom-bar">
      <div className="bottom-bar__balance">
        <input className="bottom-bar__balance-input" type="number" min="1" max="5000" />
      </div>
      <div>
        <button className="bottom-bar__spin-button bottom-bar__spin-button--disabled" type="button" onClick={() => onStartSpin()}>SPIN</button>
      </div>
    </div>
  );
};

export default BottomBar;
