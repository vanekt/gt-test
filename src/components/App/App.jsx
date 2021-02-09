import { lazy, Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';

import { client } from '../../gql/client';

const ItemsListPage = lazy(() => import('../../pages/ItemsList'));

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={null}>
        <ItemsListPage />
      </Suspense>
    </ApolloProvider>
  );
};

export default App;
