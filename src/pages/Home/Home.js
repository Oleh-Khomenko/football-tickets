import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// styles
import styles from './Home.module.scss';

export default function Home() {
  const history = useHistory();
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const cells = [];

    let counter = 0;
    for (let i = 0; i < 8; i++) {
      const temp = [];
      for (let j = 0; j < 12; j++) {
        temp.push(++counter);
      }
      cells.push(temp);
    }
    setCells(cells);
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
            }}
            onClick={routePush(el)}
          >
            {el}
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
