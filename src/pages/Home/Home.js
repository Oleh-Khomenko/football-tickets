import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// store
import { requestCells, selectCells } from '../../store/client';

// styles
import styles from './Home.module.scss';

export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cells = useSelector(selectCells);

  useEffect(() => {
    dispatch(requestCells());
  }, []);

  const routePush = (id) => () => {
    history.push(`/home/${id}`);
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
              left: `calc(${j * 8.4}%)`,
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
      <div className={styles.stadium_wrapper}>
        {wrapCells()}
      </div>
    </div>
  );
}
