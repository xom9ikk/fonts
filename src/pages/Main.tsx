import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { IRootState } from '../store/reducers/state';
import {
  EnumTheme, fontWeight, IFont,
} from '../types';
import { FontsEffects, ThemeEffects } from '../store/effects';
import { Textarea } from '../components/Textarea';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useGenerate } from '../use/generate';

const defaultFont = {
  name: 'Nunito', type: 'Sans Serif', weight: 'Regular', isItalic: false,
};

export const Main: FC = () => {
  const dispatch = useDispatch();
  const { generate } = useGenerate();
  const [fontFamily, setFontFamily] = useState<IFont>(defaultFont);
  const [textareaFonts, setTextareaFonts] = useState<Array<IFont>>([defaultFont]);
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
  const currentFont = textareaFonts[textareaFonts.length - 1];

  return (
    <div className={`container ${theme}`}>
      <Header />
      <main>
        {
          textareaFonts && textareaFonts.map((font) => (
            <link rel="stylesheet" type="text/css" href={`https://fonts.googleapis.com/css?family=${font.name}`} />
          ))
        }
        <Textarea
          isShow={isShow}
          placeholder="Type something..."
          family={currentFont.name}
          weight={currentFont.weight}
          onStartTyping={startTypingHandler}
        />
        <>
          <Card
            isOpen={startTyping}
            title={currentFont.name}
            subtitle={`${currentFont.type} (${currentFont.weight})`}
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
