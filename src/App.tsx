import React, { useState } from 'react';
import './assets/normalize.scss';
import ReelSymbolTypes from './enums';
import payTableSchema from './constants/payTableSchema';
import onlyUnique from './util/onlyUnique';
import Layout from './Layout/index';

interface InitialReelState {
  symbol?: ReelSymbolTypes
  position?: number
}
interface RandomReelDataInterface {
  symbol: ReelSymbolTypes
  position: number
}

const SymbolArr = [ReelSymbolTypes.THREE_BAR, ReelSymbolTypes.BAR,
  ReelSymbolTypes.TWO_BAR, ReelSymbolTypes.SEVEN, ReelSymbolTypes.CHERRY];

const INITIAL_STATE = { symbol: undefined, position: undefined };

const App: React.FC = () => {
  const [firstReel, setFirstReel] = useState<InitialReelState>(INITIAL_STATE);
  const [secondReel, setSecondReel] = useState<InitialReelState>(INITIAL_STATE);
  const [thirdReel, setThirdReel] = useState<InitialReelState>(INITIAL_STATE);

  const getRandomReelData = () => {
    const randomSymbol = SymbolArr[Math.floor(Math.random() * SymbolArr.length)];
    const randomPosition = Math.floor(Math.random() * 3) + 1;
    return {
      symbol: randomSymbol,
      position: randomPosition,
    };
  };

  const checkWin = (firstResult: RandomReelDataInterface,
    secondResult: RandomReelDataInterface, thirdResult: RandomReelDataInterface) => {
    const winIndex = payTableSchema.findIndex((item) => {
      const isMatch = item.symbols.includes(firstResult.symbol)
        && item.symbols.includes(secondResult.symbol)
        && item.symbols.includes(thirdResult.symbol)
        && item.positions.includes(firstResult.position)
        && item.positions.includes(secondResult.position)
        && item.positions.includes(thirdResult.position);
      if (item.isCombination) {
        const uniqueArray = [firstResult.symbol, secondResult.symbol,
          thirdResult.symbol].filter(onlyUnique);
        return isMatch && uniqueArray.length > 1;
      }
      return isMatch;
    });
  };

  const onSpin = () => {
    const firstResult = getRandomReelData();
    const secondResult = getRandomReelData();
    const thirdResult = getRandomReelData();

    setFirstReel(firstResult);
    setSecondReel(secondResult);
    setThirdReel(thirdResult);

    checkWin(firstResult, secondResult, thirdResult);
  };

  return (

    <div className="App">
      <Layout />
      <button type="button" onClick={onSpin}>SPIN</button>
    </div>
  );
};

export default App;
