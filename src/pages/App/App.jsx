import styles from './App.module.scss';
import { useState } from 'react';

import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { CursorGradient } from '../../components/CursorGradient/CursorGradient ';
import { Aside } from '../../components/Aside/Aside';

export const App = () => {
  const [activeLink, setActiveLink] = useState('about');
  return (
    <div className={styles.app}>
      <CursorGradient />
      <Header />
      <div className={styles.appWrapper} id='app'>
        <Main setActiveLink={setActiveLink} />
      </div>
      <Aside activeLink={activeLink} />
    </div>
  );
}

