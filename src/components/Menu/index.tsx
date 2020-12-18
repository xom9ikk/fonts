import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store/reducers/state';
import { EnumTheme } from '../../types';
import { ThemeEffects } from '../../store/effects';

interface IMenu {
  isOpen: boolean;
  onClick: () => void;
}

export const Menu: FC<IMenu> = ({ onClick, isOpen }) => {
  const dispatch = useDispatch();
  const appTheme = useSelector((state: IRootState) => state.theme);

  const isDark = appTheme === EnumTheme.Dark;

  const handleInfoClick = () => { };

  const handlerThemeClick = () => {
    const newTheme = isDark ? EnumTheme.Light : EnumTheme.Dark;
    dispatch(ThemeEffects.saveTheme(newTheme));
  };

  const image = isOpen ? '/svg/close.svg' : '/svg/menu.svg';

  return (
    <div className={`menu ${isOpen ? 'menu--open' : ''}`}>
      <img
        src={image}
        alt="menu"
        className="menu__icon"
        onClick={onClick}
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
            onClick={handleInfoClick}
          />
        </div>
        <div className="menu__element-wrapper">
          <a
            className="menu__button"
            href="https://colors.xom9ik.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="logo__square logo__square--external" />
            <span className="logo__text">
              ColorXoms
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
