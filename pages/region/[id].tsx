import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import RegionCardDetailed from '../../components/RegionCard/RegionCardDetailed';
import NavbarLayout from '../../layouts/NavbarLayout';

const RegionPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <RegionCardDetailed regionId={id} />;
};

RegionPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default RegionPage;
