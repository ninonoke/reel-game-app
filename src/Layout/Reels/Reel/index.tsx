import React, { useRef, useEffect, useState } from 'react';
import { symbols } from '../../../constants/symbols';
import './styles.scss';

const Reel:React.FC = () => {
  const reelEl = useRef<HTMLDivElement>(null);

  const generateList = (maxCount = 10) => {
    let list = [...symbols];

    for (let count = 0; count < maxCount; count += 1) {
      list = [...symbols, ...list];
    }

    return list;
  };

  const [list, setList] = useState(generateList());

  useEffect(() => {
    if (reelEl.current) {
      const { scrollHeight, offsetHeight } = reelEl.current;
      const scrollBottom = Math.floor(Math.random() * (scrollHeight / 10));

      reelEl.current.scrollTop = scrollHeight - scrollBottom;

      // setInterval(() => {
      //   if (reelEl.current) {
      //     if (scrollBottom > reelEl.current.scrollHeight - (2 * offsetHeight)) {
      //       setList(generateList(20));
      //     }

      //     scrollBottom += 4;
      //     reelEl.current.scrollTop = reelEl.current.scrollHeight - scrollBottom;
      //   }
      // }, 0.5);
    }
  }, []);

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
