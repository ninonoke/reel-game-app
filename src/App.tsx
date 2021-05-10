import React, { useState } from 'react';
import './assets/normalize.scss';
import payTableSchema from './constants/payTableSchema';
import onlyUnique from './util/onlyUnique';
import Layout from './Layout/index';
import { symbols, ReelSymbolTypes } from './constants/symbols';

interface InitialReelState {
  symbol?: ReelSymbolTypes
  position?: number
}
interface RandomReelDataInterface {
  symbol: ReelSymbolTypes
  position: number
}

const INITIAL_STATE = { symbol: undefined, position: undefined };

const App: React.FC = () => {
  const [firstReel, setFirstReel] = useState<InitialReelState>(INITIAL_STATE);
  const [secondReel, setSecondReel] = useState<InitialReelState>(INITIAL_STATE);
  const [thirdReel, setThirdReel] = useState<InitialReelState>(INITIAL_STATE);

  const getRandomReelData = () => {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const randomPosition = Math.floor(Math.random() * 3) + 1;
    return {
      symbol: randomSymbol.type,
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
