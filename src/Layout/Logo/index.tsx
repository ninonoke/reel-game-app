import React from 'react';
import logo from '../../assets/images/logo.png';
import './styles.scss';

const Logo:React.FC = () => (
  <div className="logo-wrapper">
    <img className="logo-wrapper__logo" alt="logo" src={logo} />
  </div>
);

export default Logo;
