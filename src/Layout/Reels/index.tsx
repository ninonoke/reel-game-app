import React from 'react';
import './styles.scss';
import Reel from './Reel/index';
import arrowSvg from '../../assets/svgs/arrow.svg';
import arrowLeftSvg from '../../assets/svgs/arrow-left.svg';

const Reels:React.FC = () => (
  <div className="reels-wrapper">
    <div />
    <div className="reels-wrapper__inner">
      <img className="reels-wrapper__arrow reels-wrapper__arrow--first" alt="arrow" src={arrowSvg} />
      <img className="reels-wrapper__arrow reels-wrapper__arrow--second" alt="arrow" src={arrowSvg} />
      <img className="reels-wrapper__arrow reels-wrapper__arrow--third" alt="arrow" src={arrowSvg} />
      <img className="reels-wrapper__arrow reels-wrapper__arrow--first reels-wrapper__arrow--left" alt="arrow" src={arrowLeftSvg} />
      <img className="reels-wrapper__arrow reels-wrapper__arrow--second reels-wrapper__arrow--left" alt="arrow" src={arrowLeftSvg} />
      <img className="reels-wrapper__arrow reels-wrapper__arrow--third reels-wrapper__arrow--left" alt="arrow" src={arrowLeftSvg} />
      <div className="reels-wrapper__reel">
        <Reel />
      </div>
      <div className="reels-wrapper__border-right" />
      <div className="reels-wrapper__reel">
        <Reel />
      </div>
      <div className="reels-wrapper__border-right" />
      <div className="reels-wrapper__reel">
        <Reel />
      </div>
    </div>
  </div>
);

export default Reels;
