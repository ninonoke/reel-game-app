import { PositionTypes } from './positions';
import { ReelSymbolTypes } from './symbols';

const payTableSchema = [
  {
    title: '3 CHERRY symbols on top line',
    payAmount: 2000,
    symbols: [ReelSymbolTypes.CHERRY],
    positions: [PositionTypes.TOP],
  },
  {
    title: '3 CHERRY symbols on center line',
    payAmount: 1000,
    symbols: [ReelSymbolTypes.CHERRY],
    positions: [PositionTypes.CENTER],
  },
  {
    title: '3 CHERRY symbols on bottom line',
    payAmount: 4000,
    symbols: [ReelSymbolTypes.CHERRY],
    positions: [PositionTypes.BOTTOM],
  },
  {
    title: '3 7 symbols on any line',
    payAmount: 150,
    symbols: [ReelSymbolTypes.SEVEN],
    positions: [PositionTypes.TOP, PositionTypes.CENTER, PositionTypes.BOTTOM],
  },
  {
    title: 'Any combination of CHERRY and 7 on any line',
    payAmount: 75,
    symbols: [ReelSymbolTypes.SEVEN, ReelSymbolTypes.CHERRY],
    positions: [PositionTypes.TOP, PositionTypes.CENTER, PositionTypes.BOTTOM],
    isCombination: true,
  },
  {
    title: '3 3xBAR symbols on any line',
    payAmount: 50,
    symbols: [ReelSymbolTypes.THREE_BAR],
    positions: [PositionTypes.TOP, PositionTypes.CENTER, PositionTypes.BOTTOM],
  },
  {
    title: '3 2xBAR symbols on any line',
    payAmount: 20,
    symbols: [ReelSymbolTypes.TWO_BAR],
    positions: [PositionTypes.TOP, PositionTypes.CENTER, PositionTypes.BOTTOM],
  },
  {
    title: '3 BAR symbols on any line',
    payAmount: 10,
    symbols: [ReelSymbolTypes.BAR],
    positions: [PositionTypes.TOP, PositionTypes.CENTER, PositionTypes.BOTTOM],
  },
  {
    title: 'Combination of any BAR symbols on any line',
    payAmount: 5,
    symbols: [ReelSymbolTypes.BAR, ReelSymbolTypes.THREE_BAR, ReelSymbolTypes.TWO_BAR],
    positions: [PositionTypes.TOP, PositionTypes.CENTER, PositionTypes.BOTTOM],
  },
];

export default payTableSchema;
