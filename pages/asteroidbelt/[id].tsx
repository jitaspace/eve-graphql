import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { AsteroidBeltCardDetailed } from '../../components/AsteroidBeltCard';

const AsteroidBeltPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <AsteroidBeltCardDetailed asteroidBeltId={id} />;
};

AsteroidBeltPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default AsteroidBeltPage;
