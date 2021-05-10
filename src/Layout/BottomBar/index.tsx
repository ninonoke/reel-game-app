import React from 'react';
import './styles.scss';

const BottomBar:React.FC = () => (
  <div className="bottom-bar">
    <div className="bottom-bar__balance">
      <input className="bottom-bar__balance-input" type="number" min="1" max="5000" />
    </div>
    <div>
      <button className="bottom-bar__spin-button bottom-bar__spin-button--disabled" type="button" onClick={() => null}>SPIN</button>
    </div>
  </div>
);

export default BottomBar;
