import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { RaceCardDetailed } from '../../components/RaceCard';

const RacePage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <RaceCardDetailed raceId={id} />;
};

RacePage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default RacePage;
