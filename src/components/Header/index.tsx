import React, { FC, useState } from 'react';
import { Logo } from '../Logo';
import { Menu } from '../Menu';

export const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handlerClick = () => {
    setIsMenuOpened((prev) => !prev);
  };

  return (
    <header className="header">
      <Logo isMenuOpened={isMenuOpened} />
      <Menu
        onClick={handlerClick}
        isOpen={isMenuOpened}
      />
    </header>
  );
};
