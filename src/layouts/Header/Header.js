import { NavLink } from 'react-router-dom';

// assets
import LOGO from '../../assets/logo.png';

// styles
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <img src={LOGO} alt="LOGO"/>
      <div className={styles.nav}>
        <NavLink to="/home">
          Квитки
        </NavLink>
        <a href="">Знижки</a>
        <a href="">Контакти</a>
        <a href="">Про нас</a>
      </div>
    </header>
  );
}
