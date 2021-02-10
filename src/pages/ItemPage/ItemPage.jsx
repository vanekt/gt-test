import { Link } from 'react-router-dom';

import styles from './ItemPage.module.css';

const ItemPage = () => {
  return (
    <div className={styles.content}>
      <h1>Okay google</h1>
      <Link to="/list">Show items list</Link>
    </div>
  );
};

export default ItemPage;
