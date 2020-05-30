import React, { FC, useEffect } from 'react';
import { useGenerate } from '../../use/generate';

interface IControls {
  isOpen: boolean;
  onGenerate: (generatedColor: any)=>void,
  onBack: ()=>void,
  onGoTo: ()=>void,
  isGradient?: boolean,
}

export const Controls: FC<IControls> = ({
  isOpen, onGenerate, onBack,
  onGoTo, isGradient,
}) => {
  const { hex, deg } = useGenerate();
  const generateHandler = () => {
    if (!isGradient) {
      return onGenerate(hex());
    }
    return onGenerate({
      start: hex(),
      end: hex(),
      deg: deg(),
    });
  };

  useEffect(() => {
    generateHandler();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`controls ${isOpen ? 'controls--open' : ''}`}>
      <button
        className="controls--button controls--back"
        onClick={onBack}
      >
        <img src="/svg/back.svg" alt="back" />
      </button>
      <button
        className="controls--button controls--generate"
        onClick={generateHandler}
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
};
