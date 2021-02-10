import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Header.module.css';

const Header = ({ userName, onLogout }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link to="/" className={styles.link}>
          <span className={styles.brand}>Brand Name</span>
        </Link>
        <div className={styles.user}>
          <span className={styles.username}>{userName}</span>
          <button className={styles.logout} onClick={onLogout}>
            (Logout)
          </button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  userName: PropTypes.string,
  onLogout: PropTypes.func,
};

export default Header;
