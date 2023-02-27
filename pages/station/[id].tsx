import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { StationCardDetailed } from '../../components/StationCard';

const StationPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <StationCardDetailed stationId={id} />;
};

StationPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default StationPage;
