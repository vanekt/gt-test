import PropTypes from 'prop-types';

import styles from './Item.module.css';

const Item = ({ id, title, text, image }) => {
  return (
    <div className={styles.item}>
      <img src={image} alt={title} className={styles.image} />
      <div>
        <h3 className={styles.title}>{title}</h3>
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
