import React from 'react';
import AppBar from './AppBar/index';
import Logo from './Logo/index';
import './styles.scss';

const Layout:React.FC = () => (
  <div className="layout">
    <AppBar />
    <Logo />
  </div>
);

export default Layout;
