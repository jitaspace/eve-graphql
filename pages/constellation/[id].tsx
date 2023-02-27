import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { ConstellationCardDetailed } from '../../components/ConstellationCard';

const ConstellationPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <ConstellationCardDetailed constellationId={id} />;
};

ConstellationPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default ConstellationPage;
