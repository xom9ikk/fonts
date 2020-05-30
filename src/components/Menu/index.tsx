import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store/reducers/state';
import { EnumTheme } from '../../types';
import { ThemeEffects } from '../../store/effects';

export const Menu: FC = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector((state: IRootState) => state.theme);
  const isDark = appTheme === EnumTheme.Dark;
  const [isOpen, setIsOpen] = useState(false);
  const handlerClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handlerThemeClick = () => {
    const newTheme = isDark ? EnumTheme.Light : EnumTheme.Dark;
    dispatch(ThemeEffects.saveTheme(newTheme));
  };
  const image = isOpen ? '/svg/close.svg' : '/svg/menu.svg';
  return (
    <div className={`menu ${isOpen ? 'menu__open' : ''}`}>
      <img
        src={image}
        alt="menu"
        className="menu__icon"
        onClick={handlerClick}
      />
      <div className="menu__content">
        <span className="menu__separator" />
        <div className="menu__element-wrapper">
          <img
            src={isDark ? '/svg/theme-dark.svg' : '/svg/theme-light.svg'}
            alt="menu"
            onClick={handlerThemeClick}
          />
        </div>
        <div className="menu__element-wrapper">
          <img
            src="/svg/info.svg"
            alt="menu"
            onClick={handlerThemeClick}
          />
        </div>
        <div className="menu__element-wrapper">
          <div className="menu__button">
            <div className="logo__square logo__square--external" />
            <span className="logo__text">
              ColorXoms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
