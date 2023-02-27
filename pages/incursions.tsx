import { Loader, Stack, Title } from '@mantine/core';
import React, { ReactElement } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { Incursion, useGetIncursionsQuery } from '../generated/graphql';
import ActionsGrid from '../components/ActionsGrid';
import { GraphQLErrorAlert } from '../components/Alert';
import { IncursionCardDetailed } from '../components/IncursionCard';

const QUERY = gql`
  query GetIncursions {
    incursions {
      type
      state
      influence
      hasBoss
      constellation {
        id
        name
      }
      faction {
        id
        name
      }
      infestedSolarSystems {
        id
        name
      }
      stagingSolarSystem {
        id
        name
      }
    }
  }
`;

export const IncursionsPage = () => {
  const { data, loading, error } = useGetIncursionsQuery();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  return (
    <Stack spacing="xl">
      <Title>Incursions</Title>
      <ActionsGrid cols={2}>
        {data.incursions.map((incursion) => (
          <IncursionCardDetailed key={incursion.type} {...incursion} />
        ))}
      </ActionsGrid>
    </Stack>
  );
};

IncursionsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default IncursionsPage;
