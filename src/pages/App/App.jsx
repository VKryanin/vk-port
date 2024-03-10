import styles from './App.module.scss';
import { useState, useEffect } from 'react';

import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { CursorGradient } from '../../components/CursorGradient/CursorGradient ';
import { Aside } from '../../components/Aside/Aside';
import { ButtonUp } from '../../components/ButtonUp/ButtonUp';

export const App = () => {
  const [activeLink, setActiveLink] = useState('about');
  const [showButtonUp, setShowButtonUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutSectionTop = aboutSection.offsetTop - 100;
        const isAboutSectionActive = window.scrollY > aboutSectionTop;

        setShowButtonUp(isAboutSectionActive);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.app}>
      <CursorGradient />
      <Header />
      <Main setActiveLink={setActiveLink} activeLink={activeLink} />
      <Aside activeLink={activeLink} setActiveLink={setActiveLink} />
      <ButtonUp showButtonUp={showButtonUp} />
    </div>
  );
}