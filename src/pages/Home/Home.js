// assets
import Ball from '../../assets/ball.png';
import HandBall from '../../assets/hand-ball.png';

// styles
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.home_wrapper}>
      <div className={styles.preview}>
        <div>
          <p>
            Оберіть та придбайте квитки на матч прямо зараз!
          </p>
          <NavLink
            to="/tickets"
          >
            Купити квитки
          </NavLink>
        </div>
      </div>
      {/* eslint-disable-next-line */}
      <a id='about'/>
      <div className={styles.about}>
        <img src={Ball} alt="ball"/>
        <p>
          Футбол для нас більше, ніж просто спорт. Поточний 2021-й знову став «футбольним» роком в Україні після
          перерви. У Києві пройде надзвичайно цікава та напружена гра команди Динамо і наші вболівальники отримали
          можливість купити білети на матч.
          <br/>
          <br/>
          За допомогою нашого сайту Ви можете обрати квитки на Олімпійському стадіоні. Для матчів практикується
          перепродаж квитків на футбол, і тут ми допомагаємо і продавцям, і покупцям — надаємо свою площадку, щоб угода
          була максимально безпечною
        </p>
      </div>
      {/* eslint-disable-next-line */}
      <a id='discounts'/>
      <div className={styles.discounts}>
        <div>
          <h2>Акції та знижки:</h2>
          <ul>
            <li>
              Позначте нас у соцмережах
              та отримайте подарунок
            </li>
            <li>
              Отримайте -10% на перше замовлення
            </li>
            <li>
              При замовленні на суму 1500 гривень доставка - отримайте -15%
            </li>
          </ul>
        </div>
        <img src={HandBall} alt="hand ball"/>
      </div>
    </div>
  );
}
