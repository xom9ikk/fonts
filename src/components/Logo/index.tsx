import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface ILogo {
  isMenuOpened: boolean;
}

export const Logo: FC<ILogo> = ({ isMenuOpened }) => (
  <Link className={`logo ${isMenuOpened ? 'logo--menu-open' : ''}`} to="/">
    <div className="logo__square" />
    <span className="logo__text">
      FontXoms
    </span>
  </Link>
);
