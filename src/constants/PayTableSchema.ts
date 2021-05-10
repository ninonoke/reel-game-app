import { ReelSymbolTypes } from './symbols';

const payTableSchema = [
  {
    title: '3 CHERRY symbols on top line',
    payAmount: 2000,
    symbols: [ReelSymbolTypes.CHERRY],
    positions: [1],
  },
  {
    title: '3 CHERRY symbols on center line',
    payAmount: 1000,
    symbols: [ReelSymbolTypes.CHERRY],
    positions: [2],
  },
  {
    title: '3 CHERRY symbols on bottom line',
    payAmount: 4000,
    symbols: [ReelSymbolTypes.CHERRY],
    positions: [3],
  },
  {
    title: '3 7 symbols on any line',
    payAmount: 150,
    symbols: [ReelSymbolTypes.SEVEN],
    positions: [1, 2, 3],
  },
  {
    title: 'Any combination of CHERRY and 7 on any line',
    payAmount: 75,
    symbols: [ReelSymbolTypes.SEVEN, ReelSymbolTypes.CHERRY],
    positions: [1, 2, 3],
    isCombination: true,
  },
  {
    title: '3 3xBAR symbols on any line',
    payAmount: 50,
    symbols: [ReelSymbolTypes.THREE_BAR],
    positions: [1, 2, 3],
  },
  {
    title: '3 2xBAR symbols on any line',
    payAmount: 20,
    symbols: [ReelSymbolTypes.TWO_BAR],
    positions: [1, 2, 3],
  },
  {
    title: '3 BAR symbols on any line',
    payAmount: 10,
    symbols: [ReelSymbolTypes.BAR],
    positions: [1, 2, 3],
  },
  {
    title: 'Combination of any BAR symbols on any line',
    payAmount: 5,
    symbols: [ReelSymbolTypes.BAR, ReelSymbolTypes.THREE_BAR, ReelSymbolTypes.TWO_BAR],
    positions: [1, 2, 3],
  },
];

export default payTableSchema;
