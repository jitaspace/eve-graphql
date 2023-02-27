import { Autocomplete, Center, Loader, Pagination, Stack, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetAttributesQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { AttributeCard } from '../components/AttributeCard';

const GET_ATTRIBUTES_QUERY = gql`
  query GetAttributes {
    attributes {
      id
      displayName
      name
    }
  }
`;

const ITEMS_PER_PAGE = 100;

export const AttributesPage = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setPage] = useState(1);
  const { data, loading, error } = useGetAttributesQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const matchingAttributes = data.attributes.filter(
    ({ name, displayName }) =>
      name?.toLowerCase().includes(searchString.toLowerCase()) ||
      displayName?.toLowerCase().includes(searchString.toLowerCase())
  );

  const totalPages = Math.max(Math.ceil(matchingAttributes.length / ITEMS_PER_PAGE), 1);
  if (activePage > totalPages) {
    setPage(totalPages);
  }

  return (
    <Stack spacing="xl">
      <Title>Attributes ({matchingAttributes.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for an attribute"
      />
      <Center>
        <Pagination total={totalPages} onChange={setPage} page={Math.min(activePage, totalPages)} />
      </Center>
      <ActionsGrid>
        {matchingAttributes
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)
          .map((attribute) => (
            <AttributeCard key={attribute.id} attribute={attribute} />
          ))}
      </ActionsGrid>
    </Stack>
  );
};

AttributesPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default AttributesPage;
