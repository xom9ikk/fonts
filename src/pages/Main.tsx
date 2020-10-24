import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { IRootState } from '../store/reducers/state';
import {
  EnumTheme, IFont,
} from '../types';
import { FontsEffects, ThemeEffects } from '../store/effects';
import { Textarea } from '../components/Textarea';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useGenerate } from '../use/generate';
import { IOption } from '../components/Select';
import { FontsActions } from '../store/actions';


export const Main: FC = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector((state: IRootState) => state.theme);
  const fontList = useSelector((state: IRootState) => state.fontList);
  const fonts = useSelector((state: IRootState) => state.fonts);
  const theme = appTheme === EnumTheme.Dark ? 'container--dark' : 'container--light';
  const { generate } = useGenerate();
  const [href, setHref] = useState<string>('');
  const [type, setType] = useState<IOption>();
  const [weight, setWeight] = useState<IOption>();
  const [textareaFonts, setTextareaFonts] = useState<Array<IFont>>([fonts.currentFont]);
  const [isShow, setIsShow] = useState<boolean>(true);
  const [startTyping, setStartTyping] = useState<boolean>(false);

  useEffect(() => {
    dispatch(ThemeEffects.restoreTheme());
  }, [dispatch]);

  useEffect(() => {
    dispatch(FontsEffects.fetchFontList());
  }, []);

  useEffect(() => {
    setHref(`https://fonts.google.com/specimen/${fonts.currentFont.name}`);
    setTimeout(() => {
      setTimeout(() => {
        setIsShow(true);
      }, 250);
      setTextareaFonts((prev) => [...prev, fonts.currentFont]);
    }, 250);
  }, [fonts.currentFont]);

  const startTypingHandler = () => {
    if (!startTyping) {
      setStartTyping(true);
    }
  };

  const generateHandler = () => {
    if (!Object.keys(fontList).length) return;
    const font = generate(fontList, type?.value, weight?.value);
    dispatch(FontsActions.addFont(font));
    setIsShow(false);
  };

  const backHandler = () => {
    dispatch(FontsActions.popFont());
    if (fonts.fonts.length > 0) {
      setIsShow(false);
    }
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
            onChangeType={setType}
            onChangeWeight={setWeight}
          />
          <Controls
            isOpen={startTyping}
            onGenerate={generateHandler}
            onBack={backHandler}
            hrefLink={href}
          />
        </>
      </main>
    </div>
  );
};
