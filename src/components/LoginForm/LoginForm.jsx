import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const formHandler = (e) => {
    e.preventDefault();

    if (!username) {
      setError("Username shouldn't be empty");
    }

    onSubmit(username);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={formHandler} className={styles.form}>
        <label className={styles.field}>
          Username
          <input name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label className={styles.field}>
          Password (optional)
          <input name="password" type="password" disabled />
        </label>
        <button type="submit">Login</button>
        {error && <span className={styles.error}>{error}</span>}
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
