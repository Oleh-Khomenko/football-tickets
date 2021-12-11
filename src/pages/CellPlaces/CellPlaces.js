import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// styles
import styles from './CellPlaces.module.scss';

export default function CellPlaces() {
  const [places, setPlaces] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const places = [];

    let counter = 0;
    for (let i = 0; i < 25; i++) {
      const temp = [];
      for (let j = 0; j < 10; j++) {
        temp.push(++counter);
      }
      places.push(temp);
    }
    setPlaces(places);
  }, []);

  function wrapCells() {
    return places.map((arr, i) => arr.map((el, j) =>
      <div
        className={styles.place}
        key={(i + 1) * (j + 1)}
        style={{
          position: 'absolute',
          top: `calc(${i * 4}%)`,
          left: `calc(${j * 10}%)`,
        }}
      >
        {el}
      </div>,
    ));
  }

  return (
    <div className={styles.content_wrapper}>
      <div className={styles.stadium_cell_wrapper}>
        {wrapCells()}
      </div>
    </div>
  );
}
