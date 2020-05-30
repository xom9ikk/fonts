/* eslint-disable jsx-a11y/no-autofocus */
import React, { FC, useEffect, useState } from 'react';

interface ITextarea {
  isShow: boolean;
  fontFamily: string;
  placeholder: string;
  onStartTyping: ()=>void;
}

export const Textarea: FC<ITextarea> = ({
  isShow, fontFamily, placeholder, onStartTyping,
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
  }, [fontFamily, text, isShow]);

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
        style={{ fontFamily }}
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
