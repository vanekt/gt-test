import { useQuery, gql } from '@apollo/client';

import Item from '../../components/Item';

import styles from './ItemsListPage.module.css';

const itemsQuery = gql`
  query GetItems {
    items {
      id
      title
      text
      image
    }
  }
`;

const ItemsListPage = () => {
  const { loading, error, data, refetch } = useQuery(itemsQuery);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        Error :(
        <button onClick={() => refetch()}>Try again</button>
      </div>
    );
  }

  return (
    <div className={styles.items}>
      {data.items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemsListPage;
