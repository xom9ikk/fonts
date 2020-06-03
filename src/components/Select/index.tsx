import React, { FC, useEffect, useState } from 'react';

export interface IOption {
  value: string,
  label: string,
}


interface ISelect {
  isOpen: boolean;
  title: string;
  defaultOption?: IOption;
  options: Array<IOption>;
  onChange: (option: IOption)=>void
  maxHeight?: number;
  style?: Object;
}

export const Select: FC<ISelect> = ({
  isOpen, title, defaultOption, options, onChange, maxHeight, style,
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(isOpen);
  const [selectedOption, setSelectedOption] = useState<IOption>(defaultOption || options[0]);
  const openHandler = () => {
    setIsOpenDropdown((prev) => !prev);
  };

  useEffect(() => {
    onChange(selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    setIsOpenDropdown(isOpen);
  }, [isOpen]);

  return (
    <div className={`select ${isOpenDropdown ? 'select--open' : ''}`} style={style}>
      <div className="select__title">{title}</div>
      <button className="select__button" onClick={openHandler}>
        {selectedOption.label}
        <div className={`select__switcher ${isOpenDropdown ? 'select__switcher--open' : ''}`}>
          <span className="select__divider" />
          <img src="/svg/arrow.svg" alt="arrow" />
        </div>
      </button>
      <div className="select__list" style={{ height: maxHeight }}>
        {
          options.map(({ value, label }) => (
            <button className="select__item" onClick={() => { openHandler(); setSelectedOption({ value, label }); }}>{label}</button>
          ))
        }
      </div>
    </div>
  );
};
