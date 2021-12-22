import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// store
import { requestCells, selectCells } from '../../store/client';

// assets
import Playground from '../../assets/playground.png';

// styles
import styles from './Tickets.module.scss';

export default function Tickets() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cells = useSelector(selectCells);

  useEffect(() => {
    dispatch(requestCells());
  }, []);

  const routePush = (id) => () => {
    history.push(`/tickets/${id}`);
  }

  function wrapCells() {
    return cells.map((arr, i) => arr.map((el, j) => {
      if ((i < 2 || i > 5) || (j < 2 || j > 9)) {
        return (
          <button
            className={styles.cell}
            key={(i + 1) * (j + 1)}
            style={{
              position: 'absolute',
              top: `calc(${i * 12.5}%)`,
              left: `calc(${j * 8.6}%)`,
              background: el.color,
            }}
            onClick={routePush(el.id)}
            disabled={el.soldOut}
          >
            {el.id}
          </button>
        );
      }
    }));
  }

  return (
    <div className={styles.content_wrapper}>
      <h1>Придбати білети на Динамо-Київ</h1>
      <div className={styles.prices}>
        <p>Прайс на квитки футбольного матчу на Олімпійському стадіоні:</p>
        <div>
          <p style={{background: 'rgba(255, 108, 108, 1)'}}>200₴</p>
          <p style={{background: 'rgba(253, 184, 140, 1)'}}>400₴</p>
          <p style={{background: 'rgba(247, 255, 128, 1)'}}>800₴</p>
          <p style={{background: 'rgba(202, 255, 190, 1)'}}>1600₴</p>
        </div>
        <p className={styles.date}>
          Початок: 22.02.2022<br/>
          18:00
        </p>
      </div>
      <div className={styles.stadium_wrapper}>
        {wrapCells()}
        <img src={Playground} alt="playground"/>
      </div>
    </div>
  );
}
