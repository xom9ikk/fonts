import React, { FC, useState } from 'react';
import { IOption, Select } from '../Select';
import { fontTypes, fontWeights } from '../../types';

interface ICard {
  isOpen: boolean;
  title: string;
  subtitle: string;
  onChangeType: (option: IOption)=>void;
  onChangeWeight: (option: IOption)=>void;
}

export const Card: FC<ICard> = ({
  isOpen, title, subtitle, onChangeType, onChangeWeight,
}) => {
  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const filterClickHandler = () => {
    setIsOpenSelect(false);
    setIsOpenFilter((prev) => !prev);
  };
  const optionsType = [{ value: 'any', label: 'Any' }, ...fontTypes.map((value) => ({ value, label: value }))];
  const optionsWeight = [{ value: 'any', label: 'Any' }, ...fontWeights.map((value) => ({ value, label: value }))];

  return (
    <div className={`card ${isOpen ? 'card--open' : ''}`}>
      <div className="card__content">
        <div className={`card__text ${!isOpenFilter ? 'card__text--open' : ''}`}>
          <h3 className="card__title">
            {title}
          </h3>
          <h3 className="card__subtitle">
            {subtitle}
          </h3>
        </div>
        <div className={`card__filter ${isOpenFilter ? 'card__filter--open' : ''}`}>
          <Select
            title="Font Type:"
            isOpen={isOpenSelect}
            options={optionsType}
            style={{ marginRight: 20 }}
            onChange={onChangeType}
            maxHeight={140}
          />
          <Select
            title="Font Weight:"
            isOpen={isOpenSelect}
            options={optionsWeight}
            onChange={onChangeWeight}
            maxHeight={140}
          />
        </div>
      </div>
      <button className="card__switcher" onClick={filterClickHandler}>
        {
            isOpenFilter
              ? <img src="/svg/tick.svg" alt="done" />
              : <img src="/svg/filter.svg" alt="filter" />
          }
      </button>
    </div>
  );
};
