import { useQuery, gql } from '@apollo/client';

import Item from '../../components/Item';

import styles from './ItemsList.module.css';

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

const ItemsList = () => {
  const { loading, error, data } = useQuery(itemsQuery);

  // @todo
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className={styles.items}>
      {data.items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemsList;
