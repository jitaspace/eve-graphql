import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { SolarSystemCardDetailed } from '../../components/SolarSystemCard';

const SolarSystemPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <SolarSystemCardDetailed solarSystemId={id} />;
};

SolarSystemPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default SolarSystemPage;
