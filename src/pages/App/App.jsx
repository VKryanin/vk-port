import styles from './App.module.scss';

import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appContainer}/>
      <Main />
    </div>
  );
}

