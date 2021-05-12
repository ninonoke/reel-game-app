import React from 'react';
import './styles.scss';
import { useSelector, shallowEqual } from 'react-redux';
import Reel from './Reel/index';
import arrowSvg from '../../assets/svgs/arrow.svg';
import arrowLeftSvg from '../../assets/svgs/arrow-left.svg';
import { ReducerInterface } from '../../store/interfaces';

const Reels:React.FC = () => {
  const {
    isSpinning, firstReelData, secondReelData, thirdReelData,
  } = useSelector(
    (state: ReducerInterface) => ({
      isSpinning: state.isSpinning,
      firstReelData: state.firstReelData,
      secondReelData: state.secondReelData,
      thirdReelData: state.thirdReelData,
    }),
    shallowEqual,
  );

  return (
    <div className="reels-wrapper">
      <div />
      <div className="reels-wrapper__inner">
        <img className="reels-wrapper__arrow reels-wrapper__arrow--first reels-wrapper__arrow--left" alt="arrow" src={arrowLeftSvg} />
        <img className="reels-wrapper__arrow reels-wrapper__arrow--second reels-wrapper__arrow--left" alt="arrow" src={arrowLeftSvg} />
        <img className="reels-wrapper__arrow reels-wrapper__arrow--third reels-wrapper__arrow--left" alt="arrow" src={arrowLeftSvg} />
        <div className="reels-wrapper__reel">
          <Reel isSpinning={isSpinning} reelData={firstReelData} />
        </div>
        <div className="reels-wrapper__border-right" />
        <div className="reels-wrapper__reel">
          <Reel isSpinning={isSpinning} reelData={secondReelData} />
        </div>
        <div className="reels-wrapper__border-right" />
        <div className="reels-wrapper__reel">
          <Reel isSpinning={isSpinning} reelData={thirdReelData} />
        </div>
        <img className="reels-wrapper__arrow reels-wrapper__arrow--first" alt="arrow" src={arrowSvg} />
        <img className="reels-wrapper__arrow reels-wrapper__arrow--second" alt="arrow" src={arrowSvg} />
        <img className="reels-wrapper__arrow reels-wrapper__arrow--third" alt="arrow" src={arrowSvg} />
      </div>
    </div>
  );
};

export default Reels;
