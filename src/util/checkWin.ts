import { ReelDataInterface } from '../store/interfaces';
import payTableSchema from '../constants/payTableSchema';
import onlyUnique from './onlyUnique';

const checkWin = (
  firstResult: ReelDataInterface,
  secondResult: ReelDataInterface,
  thirdResult: ReelDataInterface,
) => {
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

  return winIndex;
};

export default checkWin;
