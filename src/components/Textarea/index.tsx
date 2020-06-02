/* eslint-disable jsx-a11y/no-autofocus */
import React, { FC, useEffect, useState } from 'react';
import { fontWeight } from '../../types';

interface ITextarea {
  isShow: boolean;
  family: string;
  weight: string;
  placeholder: string;
  onStartTyping: ()=>void;
}

export const Textarea: FC<ITextarea> = ({
  isShow, family, weight, placeholder, onStartTyping,
}) => {
  const [text, setText] = useState<string>('');
  const [classes, setClasses] = useState<Array<string>>(['textarea']);
  const [end, setEnd] = useState<number>(0);

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


  useEffect(() => {
    setClasses(['textarea']);
    if (isShow) {
      setClasses((prev) => [...prev, 'textarea--visible']);
    }
    // setTimeout(() => {
    //   setClasses((prev) => [...prev, 'textarea--visible']);
    // }, 1000);
    if (text) {
      setClasses((prev) => [...prev, 'textarea--using']);
    }
  }, [family, text, isShow]);

  // useEffect(() => {
  //   if (text) {
  //     setClasses((prev) => [...prev, 'textarea--using']);
  //   }
  // }, [text]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setClasses((prev) => [...prev, 'textarea--visible']);
  //   }, 100);
  // }, []);

  return (
    <>
      <textarea
        className={classes.join(' ')}
        maxLength={30}
        spellCheck="false"
        autoFocus
        placeholder={placeholder.slice(0, end)}
        // @ts-ignore
        style={{ fontFamily: family, fontWeight: fontWeight[weight] }}
        onChange={(event) => {
          setText(event.target.value);
          onStartTyping();
        }}
      >
        {text}
      </textarea>
    </>

  );
};
