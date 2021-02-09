import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://46whe.sse.codesandbox.io', // @todo move to .env
  cache: new InMemoryCache(),
});

export { client };
