import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { PlanetCardDetailed } from '../../components/PlanetCard';

const PlanetPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <PlanetCardDetailed planetId={id} />;
};

PlanetPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default PlanetPage;
