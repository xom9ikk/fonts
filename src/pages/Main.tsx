import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { IRootState } from '../store/reducers/state';
import { EnumTheme } from '../types';
import { ThemeEffects, FontsEffects } from '../store/effects';
import { Textarea } from '../components/Textarea';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useGenerate } from '../use/generate';

export const Main: FC = () => {
  const dispatch = useDispatch();
  const { generate } = useGenerate();
  const [fontFamily, setFontFamily] = useState<string>('Nunito Regular');
  const [textareaFonts, setTextareaFonts] = useState<Array<string>>(['Nunito Regular']);
  const [isShow, setIsShow] = useState<boolean>(true);
  const [startTyping, setStartTyping] = useState<boolean>(false);
  const appTheme = useSelector((state: IRootState) => state.theme);
  const fontList = useSelector((state: IRootState) => state.fonts);
  const theme = appTheme === EnumTheme.Dark ? 'container--dark' : 'container--light';

  useEffect(() => {
    dispatch(ThemeEffects.restoreTheme());
  }, [dispatch]);

  useEffect(() => {
    dispatch(FontsEffects.fetchFontList());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setIsShow(true);
      }, 250);
      setTextareaFonts((prev) => [...prev, fontFamily]);
    }, 250);
  }, [fontFamily]);

  const startTypingHandler = () => {
    if (!startTyping) {
      setStartTyping(true);
    }
  };

  const generateHandler = () => {
    if (!Object.keys(fontList).length) return;
    setFontFamily(generate(fontList));
    setIsShow(false);
  };

  const backHandler = () => {

  };
  const goToHandler = () => {

  };

  return (
    <div className={`container ${theme}`}>
      <Header />
      <main>
        {
          textareaFonts && textareaFonts.map((font) => (
            <link rel="stylesheet" type="text/css" href={`https://fonts.googleapis.com/css?family=${font}`} />
          ))
        }
        <Textarea
          isShow={isShow}
          placeholder="Type something..."
          fontFamily={textareaFonts[textareaFonts.length - 1]}
          onStartTyping={startTypingHandler}
        />
        <>
          <Card
            isOpen={startTyping}
            title={textareaFonts[textareaFonts.length - 1]}
            subtitle="Sans Serif"
          />
          <Controls
            isOpen={startTyping}
            onGenerate={generateHandler}
            onBack={backHandler}
            onGoTo={goToHandler}
          />
        </>
      </main>
    </div>
  );
};
