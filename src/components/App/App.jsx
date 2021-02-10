import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../AuthContext';
import LoginForm from '../LoginForm';
import Header from '../Header';
import ItemsListPage from '../../pages/ItemsListPage';
import ItemPage from '../../pages/ItemPage';

const App = () => {
  const context = useContext(AuthContext);
  const { user, onLogin, onLogout } = context;

  if (!user) {
    return <LoginForm onSubmit={onLogin} />;
  }

  return (
    <>
      <Header userName={user} onLogout={onLogout} />
      <Switch>
        <Route path="/list">
          <ItemsListPage />
        </Route>
        <Route path="/item/:id">
          <ItemPage />
        </Route>
        <Redirect to="/list" />
      </Switch>
    </>
  );
};

export default App;
