import { Autocomplete, Loader, Stack, Title } from '@mantine/core';
import React, { ReactElement, useState } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetCategoriesQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { CategoryCard } from '../components/CategoryCard';

const QUERY = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

export const CategoriesPage = () => {
  const [searchString, setSearchString] = useState('');
  const { data, loading, error } = useGetCategoriesQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const filteredCategories = data.categories.filter((category) =>
    category.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <Stack spacing="xl">
      <Title>Categories ({filteredCategories.length})</Title>
      <Autocomplete
        value={searchString}
        data={[]}
        onChange={(value) => setSearchString(value)}
        rightSection={loading ? <Loader size={16} /> : null}
        placeholder="Search for a category"
      />
      <ActionsGrid>
        {filteredCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ActionsGrid>
    </Stack>
  );
};

CategoriesPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default CategoriesPage;
