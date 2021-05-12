import React, { useRef, useLayoutEffect, useState } from 'react';
import { PositionTypes } from '../../../constants/positions';
import { symbols } from '../../../constants/symbols';
import { ReelDataInterface } from '../../../store/interfaces';
import './styles.scss';

interface ReelProps {
  isSpinning: boolean
  reelData?: ReelDataInterface
}

const Reel:React.FC<ReelProps> = ({ isSpinning, reelData }) => {
  const reelEl = useRef<HTMLDivElement>(null);
  const interval = useRef<number>();

  const generateList = (maxCount = 10) => {
    let list = [...symbols];

    for (let count = 0; count < maxCount; count += 1) {
      list = [...symbols, ...list];
    }

    return list;
  };

  const [list, setList] = useState(generateList());

  const setPosition = (position: PositionTypes, scrollPosition: number, nodeHeight: number) => {
    if (reelEl.current) {
      const { offsetHeight } = reelEl.current;
      if (position === PositionTypes.TOP) {
        reelEl.current.scrollTop = scrollPosition - (offsetHeight * 0.2) + (nodeHeight / 2);
      }
      if (position === PositionTypes.CENTER) {
        reelEl.current.scrollTop = scrollPosition - (offsetHeight * 0.5) + (nodeHeight / 2);
      }
      if (position === PositionTypes.BOTTOM) {
        reelEl.current.scrollTop = scrollPosition - (offsetHeight * 0.8) + (nodeHeight / 2);
      }
    }
  };

  // eslint-disable-next-line consistent-return
  useLayoutEffect(() => {
    if (reelEl.current) {
      const { scrollHeight, offsetHeight } = reelEl.current;
      let scrollBottom = Math.floor(Math.random() * (scrollHeight / 10));

      reelEl.current.scrollTop = scrollHeight - scrollBottom;

      if (isSpinning && !reelData) {
        interval.current = window.setInterval(() => {
          if (reelEl.current) {
            if (scrollBottom > reelEl.current.scrollHeight - (2 * offsetHeight)) {
              setList(generateList(20));
            }

            scrollBottom += 4;
            reelEl.current.scrollTop = reelEl.current.scrollHeight - scrollBottom;
          }
        }, 0.5);
      }

      if (reelData) {
        clearInterval(interval.current);

        if (reelEl.current && reelData) {
          const itemIndex = symbols.findIndex(
            (symbol) => reelData && reelData.symbol === symbol.type,
          );

          const node = reelEl.current?.childNodes[itemIndex] as HTMLDivElement;

          const reelElTop = reelEl.current.offsetTop;
          const nodeTop = node.offsetTop;
          const scrollPosition = nodeTop - reelElTop;

          if (reelData) {
            setPosition(reelData.position, scrollPosition, node.offsetHeight);
          }
        }
      }
    }
  }, [reelData, isSpinning]);

  return (
    <div className="reel" ref={reelEl}>
      {list.map((symbol, i) => (
        <div key={i}>
          <img className="reel__image" alt={symbol.type} src={symbol.src} />
        </div>
      ))}
    </div>
  );
};

export default Reel;
