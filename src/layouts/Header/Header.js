import { NavLink } from 'react-router-dom';

// assets
import LOGO from '../../assets/logo.png';

// styles
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={LOGO} alt="LOGO"/>
      </NavLink>
      <div className={styles.nav}>
        <NavLink
          to="/tickets/"
          activeClassName={styles.active_link}
        >
          Квитки
        </NavLink>
        <a
          href="/#about"
        >
          Про нас
        </a>
        <a
          href="/#discounts"
        >
          Знижки
        </a>
        
        <a
          href="/#contacts"
        >
          Контакти
        </a>
      </div>
    </header>
  );
}
