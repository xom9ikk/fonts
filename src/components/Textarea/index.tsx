/* eslint-disable jsx-a11y/no-autofocus */
import React, { FC, useEffect, useState } from 'react';

interface ITextarea {
  fontFamily: string;
  placeholder: string;
  onStartTyping: ()=>void;
}

export const Textarea: FC<ITextarea> = ({
  fontFamily, placeholder, onStartTyping,
}) => {
  const [text, setText] = useState<string>('');
  const [end, setEnd] = useState<number>(0);
  const classes = ['textarea'];
  if (text) {
    classes.push('textarea--using');
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setEnd((prev) => {
        if (prev >= placeholder.length - 1) {
          clearInterval(interval);
        }
        return prev + 1;
      });
    }, 100);
    return () => { clearInterval(interval); };
  }, []);
  return (
    <textarea
      className={classes.join(' ')}
      maxLength={30}
      spellCheck="false"
      autoFocus
      placeholder={placeholder.slice(0, end)}
      style={{ fontFamily }}
      onChange={(event) => {
        setText(event.target.value);
        onStartTyping();
      }}
    >
      {text}
    </textarea>
  );
};
