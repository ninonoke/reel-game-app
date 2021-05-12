import { symbols } from '../constants/symbols';
import { PositionTypes } from '../constants/positions';

const getRandomReelData = () => {
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const position = [
    PositionTypes.TOP,
    PositionTypes.CENTER,
    PositionTypes.BOTTOM,
  ][Math.floor(Math.random() * 3)];

  return {
    symbol: randomSymbol.type,
    position,
  };
};

export default getRandomReelData;
