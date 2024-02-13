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
      <Main setActiveLink={setActiveLink} activeLink={activeLink} />
      <Aside activeLink={activeLink} setActiveLink={setActiveLink} />
    </div>
  );
}

