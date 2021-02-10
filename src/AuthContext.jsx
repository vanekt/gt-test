import React, { useState, useEffect } from 'react';

const LS_USERNAME_KEY = 'username';

export const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userName = localStorage.getItem(LS_USERNAME_KEY);
    if (userName) {
      setUser(userName);
    }
  }, []);

  const onLogin = (userName) => {
    setUser(userName);
    localStorage.setItem(LS_USERNAME_KEY, userName);
  };

  const onLogout = () => {
    setUser(null);
    localStorage.removeItem(LS_USERNAME_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        onLogin,
        onLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
