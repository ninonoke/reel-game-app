import React from 'react';
import { symbols } from '../../../constants/symbols';
import './styles.scss';

const Reel:React.FC = () => (
  <div className="reel">
    {symbols.map((symbol) => (
      <div>
        <img className="reel__image" alt={symbol.type} src={symbol.src} />
      </div>
    ))}
  </div>
);

export default Reel;
