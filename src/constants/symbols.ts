import threeBarPng from '../assets/images/three-bar.png';
import barPng from '../assets/images/bar.png';
import twoBarPng from '../assets/images/two-bar.png';
import sevenPng from '../assets/images/seven.png';
import cherryPng from '../assets/images/cherry.png';

export enum ReelSymbolTypes {
    THREE_BAR='THREE_BAR',
    BAR='BAR',
    TWO_BAR='TWO_BAR',
    SEVEN='SEVEN',
    CHERRY='CHERRY',
}

export const symbols = [
  { type: ReelSymbolTypes.THREE_BAR, src: threeBarPng, label: '3xBAR' },
  { type: ReelSymbolTypes.BAR, src: barPng, label: 'BAR' },
  { type: ReelSymbolTypes.TWO_BAR, src: twoBarPng, label: '2xBAR' },
  { type: ReelSymbolTypes.SEVEN, src: sevenPng, label: '7' },
  { type: ReelSymbolTypes.CHERRY, src: cherryPng, label: 'CHERRY' },
];
