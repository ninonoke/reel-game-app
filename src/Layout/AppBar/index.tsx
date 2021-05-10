import React, { useState } from 'react';
import infoSvg from '../../assets/svgs/info.svg';
import PayTable from './PayTable/index';
import './styles.scss';

const AppBar:React.FC = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="app-bar">
      <button className="app-bar__info-button" type="button" onClick={() => setIsInfoOpen(true)}>
        <img
          alt="info icon"
          className="info-icon"
          src={infoSvg}
        />
      </button>
      {isInfoOpen

        && <PayTable onClose={() => setIsInfoOpen(false)} />}
    </div>
  );
};

export default AppBar;
