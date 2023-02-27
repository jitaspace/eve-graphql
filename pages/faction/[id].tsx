import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { FactionCardDetailed } from '../../components/FactionCard';

const FactionPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <FactionCardDetailed factionId={id} />;
};

FactionPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default FactionPage;
