import { PositionTypes } from '../constants/positions';
import { ReelSymbolTypes } from '../constants/symbols';

export interface ReelDataInterface {
    symbol: ReelSymbolTypes
    position: PositionTypes
}

export interface ActionInterface {
    type: string,
    payload?: ReelDataInterface
}

export interface ReducerInterface {
    isSpinning: boolean,
    firstReelData?: ReelDataInterface,
    secondReelData?: ReelDataInterface,
    thirdReelData?: ReelDataInterface,
}

export type DispatchType = (args: ActionInterface) => ActionInterface
