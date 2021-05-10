import React, { useState } from 'react';
import Classnames from 'classnames';
import closeSvg from '../../../assets/svgs/close.svg';
import { symbols } from '../../../constants/symbols';
import { positions } from '../../../constants/positions';
import './styles.scss';

interface SettingsProps {
  onClose: () => void
}

const Settings:React.FC<SettingsProps> = ({ onClose }) => {
  const [isRandom, setIsRandom] = useState(false);

  return (
    <div className="settings-wrapper">
      <div>
        <button
          className="settings-wrapper__close-button"
          type="button"
          onClick={onClose}
        >
          <img
            alt="close icon"
            className="settings-wrapper__close-icon"
            src={closeSvg}
          />
        </button>

      </div>
      <div className="settings-wrapper__debug-area">
        <label className="settings-wrapper__radio" htmlFor="radio-random">
          <input onChange={() => setIsRandom(true)} checked={isRandom} id="radio-random" type="radio" />
          random
        </label>
        <label className="settings-wrapper__radio" htmlFor="radio-fixed">
          <input onChange={() => setIsRandom(false)} checked={!isRandom} id="radio-fixed" type="radio" />
          fixed
        </label>
      </div>
      <div className={Classnames('settings-wrapper__selections', { 'settings-wrapper__selections--disabled': isRandom })}>
        <div className="settings-wrapper__reel-title">
          <h4>First Reel</h4>
          <div className="settings-wrapper__selects-wrapper">

            <select>
              {symbols.map((symbol) => (
                <option value={symbol.type}>
                  {symbol.label}
                </option>
              ))}
            </select>
            <select>
              {positions.map((position) => (
                <option value={position.type}>
                  {position.label}
                </option>
              ))}
            </select>
          </div>

        </div>
        <div className="settings-wrapper__reel-title">
          <h4>Second Reel</h4>
          <div className="settings-wrapper__selects-wrapper">

            <select>
              {symbols.map((symbol) => (
                <option value={symbol.type}>
                  {symbol.label}
                </option>
              ))}
            </select>
            <select>
              {positions.map((position) => (
                <option value={position.type}>
                  {position.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="settings-wrapper__reel-title">
          <h4>Third Reel</h4>
          <div className="settings-wrapper__selects-wrapper">

            <select>
              {symbols.map((symbol) => (
                <option value={symbol.type}>
                  {symbol.label}
                </option>
              ))}
            </select>
            <select>
              {positions.map((position) => (
                <option value={position.type}>
                  {position.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Settings;
