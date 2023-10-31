import styles from './App.module.scss';

import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { CursorGradient } from '../../components/CursorGradient/CursorGradient ';

export const App = () => {

  return (
    <div className={styles.app}>
      <CursorGradient />
      <Header />
      <div className={styles.appContainer} />
      <Main />
    </div>
  );
}

