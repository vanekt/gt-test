import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Item.module.css';

const Item = ({ id, title, text, image }) => {
  return (
    <div className={styles.item}>
      <Link to={`/item/${id}`}>
        <img src={image} alt={title} className={styles.image} />
      </Link>
      <div>
        <Link to={`/item/${id}`}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <p>{text}</p>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
};

export default Item;
