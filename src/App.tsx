import React, { useState } from 'react';
import './assets/normalize.scss';
import ReelSymbolTypes from './enums';
import PayTableSchema from './constants/PayTableSchema';

interface InitialReelState {
  symbol?: string
  position?: number
}

const SymbolArr = [ReelSymbolTypes.THREE_BAR, ReelSymbolTypes.BAR,
  ReelSymbolTypes.TWO_BAR, ReelSymbolTypes.SEVEN, ReelSymbolTypes.CHERRY];

const INITIAL_STATE = { symbol: undefined, position: undefined };

const App: React.FC = () => {
  const [firstReel, setFirstReel] = useState<InitialReelState>(INITIAL_STATE);
  const [secondReel, setSecondReel] = useState<InitialReelState>(INITIAL_STATE);
  const [thirdReel, setThirdReel] = useState<InitialReelState>(INITIAL_STATE);
  console.log(firstReel);
  console.log(secondReel);
  console.log(thirdReel);

  const getRandomReelData = () => {
    const randomSymbol = SymbolArr[Math.floor(Math.random() * SymbolArr.length)];
    const randomPosition = Math.floor(Math.random() * 3) + 1;
    return {
      symbol: randomSymbol,
      position: randomPosition,
    };
  };

  const onSpin = () => {
    setFirstReel(getRandomReelData());
    setSecondReel(getRandomReelData());
    setThirdReel(getRandomReelData());

    console.log(PayTableSchema);
  };

  return (

    <div className="App">
      <button type="button" onClick={onSpin}>SPIN</button>
    </div>
  );
};

export default App;
