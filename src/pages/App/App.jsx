import styles from './App.module.scss';

import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <NavBar />
      <Footer/>
    </div>
  );
}

