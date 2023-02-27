import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { BloodlineCardDetailed } from '../../components/BloodlineCard';

const BloodlinePage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <BloodlineCardDetailed bloodlineId={id} />;
};

BloodlinePage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default BloodlinePage;
