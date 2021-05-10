import React, { useState } from 'react';
import infoSvg from '../../assets/svgs/info.svg';
import settingsSvg from '../../assets/svgs/settings.svg';
import PayTable from './PayTable/index';
import Settings from './Settings/index';
import './styles.scss';

const AppBar:React.FC = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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
      <button className="app-bar__settings-button" type="button" onClick={() => setIsSettingsOpen(true)}>
        <img
          alt="settings icon"
          className="settings-icon"
          src={settingsSvg}
        />
      </button>
      {isSettingsOpen

        && <Settings onClose={() => setIsSettingsOpen(false)} />}
    </div>
  );
};

export default AppBar;
