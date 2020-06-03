import React, { FC } from 'react';

interface IControls {
  isOpen: boolean;
  onGenerate: ()=>void,
  onBack: ()=>void,
  hrefLink: string,
}

export const Controls: FC<IControls> = ({
  isOpen,
  onGenerate,
  onBack,
  hrefLink,
}) => (
  <div className={`controls ${isOpen ? 'controls--open' : ''}`}>
    <button
      className="controls--button controls--back"
      onClick={onBack}
    >
      <img src="/svg/back.svg" alt="back" />
    </button>
    <button
      className="controls--button controls--generate"
      onClick={onGenerate}
    >
      <img src="/svg/refresh.svg" alt="refresh" />
      Generate
    </button>
    <a
      href={hrefLink}
      target="_blank"
      rel="noopener noreferrer"
      className="controls--button controls--copy"
    >
      <img src="/svg/goto.svg" alt="link" />
    </a>
  </div>
);
