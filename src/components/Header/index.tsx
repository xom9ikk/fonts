import React, { FC } from 'react';
import { Logo } from '../Logo';
import { Menu } from '../Menu';

export const Header: FC = () => (
  <header className="header">
    <Logo />
    <Menu />
  </header>
);
