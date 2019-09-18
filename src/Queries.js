import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_QUERIES = gql`
  query {
    uqeries {
      id
      pw
      name
    }
  }
`;

function Queries() {
  const { loading, error, data } = useQuery(GET_QUERIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!(</p>;
  return (
    <ul>
      {data.uqeries.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}

export default Queries;