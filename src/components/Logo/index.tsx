import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Logo: FC = () => (
  <Link className="logo" to="/">
    <div className="logo__square" />
    <span className="logo__text">
      FontXoms
    </span>
  </Link>
);
