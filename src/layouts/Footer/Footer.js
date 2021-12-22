// assets
import LOGO from '../../assets/logo.png';

// styles
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <NavLink to="/">
        <img src={LOGO} alt="logo"/>
      </NavLink>
      <div>
        <p>
          Чекаємо на дзвінки: <br/>
          095-419-3632 <br/>
          066-657-1181 <br/>
          096-405-9048 <br/>
        </p>
        <p>
          Ми у соцмережах: <br/>
          inst: @all_tick <br/>
          facebook: AllTick <br/>
          vk: All Tick <br/>
        </p>
      </div>
    </footer>
  );
}
