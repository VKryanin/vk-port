import styles from './App.module.scss';

import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { NavBar } from '../../components/NavBar/NavBar';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <NavBar />
    </div>
  );
}

