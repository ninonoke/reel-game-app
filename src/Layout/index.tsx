import React from 'react';
import AppBar from './AppBar/index';
import Logo from './Logo/index';
import Reels from './Reels/index';
import BottomBar from './BottomBar/index';
import './styles.scss';

const Layout:React.FC = () => (
  <div className="layout">
    <AppBar />
    <Logo />
    <Reels />
    <BottomBar />
  </div>
);

export default Layout;
