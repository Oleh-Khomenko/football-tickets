import { useParams } from 'react-router-dom';

// assets
import TicketImg from '../../assets/ticket.png';
import CodeImg from '../../assets/code.png';
import LOGO from '../../assets/logo.png';

// styles
import styles from './Buy.module.scss';

export default function Buy() {
  const { cellId, id, price } = useParams();
  
  const printTicket = () => {
    print();
  };
  
  return (
    <div className={styles.buy_wrapper}>
      <h1>Дякуємо за покупку!</h1>
      
      <p>Ваш квиток:</p>
      
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src={TicketImg} alt="img"/>
            <p>
              Роздрукуйте і пред’явіть квиток на вході або покажіть його з телефона
            </p>
            <p>
              Унікальний штрих-код може бути використаний тільки один раз. Не копіюйте цей квиток і не публікуйте в
              інтернеті. Це може стати на перешкоді вашого входу на матч. За збереження даних сайт відповідальності не
              несе.
            </p>
            <img src={CodeImg} alt="code"/>
          </div>
          <div className={styles.right}>
            <h2>Матч “Динамо-Київ”</h2>
            <p>
              дата:  22.02.2022 18:00 <br/>
              адреса: Олімпійський стадіон <br/>
              сектор: {cellId}<br/>
              місце: {id}<br/>
              ціна: {price}<br/>
            </p>
            <img src={LOGO} alt="logo"/>
            <div className={styles.date}>{new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </div>
      <button onClick={printTicket}>Роздрукувати</button>
    </div>
  );
}
