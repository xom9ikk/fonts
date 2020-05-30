import React, { FC } from 'react';

interface ICard {
  isOpen: boolean;
  title: string;
  subtitle: string;
}

export const Card: FC<ICard> = ({
  isOpen, title, subtitle,
}) => (
  <div className={`card ${isOpen ? 'card--open' : ''}`}>
    <div className="card__text">
      <h3 className="card__title">
        {title}
      </h3>
      <h3 className="card__subtitle">
        {subtitle}
      </h3>
    </div>
    <img className="card__filter" src="/svg/filter.svg" alt="filter" />
  </div>
);
