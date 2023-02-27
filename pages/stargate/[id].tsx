import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { StargateCardDetailed } from '../../components/StargateCard';

const StargatePage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <StargateCardDetailed stargateId={id} />;
};

StargatePage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default StargatePage;
