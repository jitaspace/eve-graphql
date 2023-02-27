import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { CorporationCardDetailed } from '../../components/CorporationCard';

const CorporationPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <CorporationCardDetailed corporationId={id} />;
};

CorporationPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default CorporationPage;
