import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { start } from 'repl';
import { Header } from '../components/Header';
import { IRootState } from '../store/reducers/state';
import { EnumTheme } from '../types';
import { ThemeEffects } from '../store/effects';
import { Textarea } from '../components/Textarea';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

export const Main: FC = () => {
  const dispatch = useDispatch();
  const [startTyping, setStartTyping] = useState<boolean>(false);
  const appTheme = useSelector((state: IRootState) => state.theme);
  const theme = appTheme === EnumTheme.Dark ? 'container--dark' : 'container--light';
  useEffect(() => {
    dispatch(ThemeEffects.restoreTheme());
  }, [dispatch]);
  const startTypingHandler = () => {
    if (!startTyping) {
      setStartTyping(true);
    }
  };
  const generateHandler = () => {

  };
  const backHandler = () => {

  };
  const goToHandler = () => {

  };

  return (
    <div className={`container ${theme}`}>
      <Header />
      <main>
        <Textarea
          placeholder="Type something..."
          fontFamily="Nunito Regular"
          onStartTyping={startTypingHandler}
        />
        <>
          <Card
            isOpen={startTyping}
            title="Title"
            subtitle="Subtitle"
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
