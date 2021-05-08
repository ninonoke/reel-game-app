import ReelSymbolTypes from '../enums';

const PayTableSchema = [
  {
    payAmount: 2000,
    symbols: [ReelSymbolTypes.CHERRY],
    positions: [1],
  },
  {
    payAmount: 1000,
    symbols: [ReelSymbolTypes.CHERRY],
    positions: [2],
  },
  {
    payAmount: 4000,
    symbols: [ReelSymbolTypes.CHERRY],
    positions: [3],
  },
  {
    payAmount: 150,
    symbols: [ReelSymbolTypes.SEVEN],
    positions: [1, 2, 3],
  },
  {
    payAmount: 75,
    symbols: [ReelSymbolTypes.SEVEN, ReelSymbolTypes.CHERRY],
    positions: [1, 2, 3],
  },
  {
    payAmount: 50,
    symbols: [ReelSymbolTypes.THREE_BAR],
    positions: [1, 2, 3],
  },
  {
    payAmount: 20,
    symbols: [ReelSymbolTypes.TWO_BAR],
    positions: [1, 2, 3],
  },
  {
    payAmount: 10,
    symbols: [ReelSymbolTypes.BAR],
    positions: [1, 2, 3],
  },
  {
    payAmount: 10,
    symbols: [ReelSymbolTypes.BAR, ReelSymbolTypes.THREE_BAR, ReelSymbolTypes.TWO_BAR],
    positions: [1, 2, 3],
  },
];

export default PayTableSchema;
