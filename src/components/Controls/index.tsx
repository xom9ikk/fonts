import React, { FC } from 'react';

interface IControls {
  isOpen: boolean;
  onGenerate: ()=>void,
  onBack: ()=>void,
  onGoTo: ()=>void,
}

export const Controls: FC<IControls> = ({
  isOpen,
  onGenerate,
  onBack,
  onGoTo,
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
    <button
      className="controls--button controls--copy"
      onClick={() => {
        onGoTo();
      }}
    >
      <img src="/svg/goto.svg" alt="tick" />
    </button>
  </div>
);
