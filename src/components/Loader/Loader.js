import { RiseLoader } from 'react-spinners';

// styles
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader_overlay}>
      <RiseLoader color="rgba(0, 180, 230, 1)"/>
    </div>
  );
}
