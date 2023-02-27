import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { MoonCardDetailed } from '../../components/MoonCard';

const MoonPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <MoonCardDetailed moonId={id} />;
};

MoonPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default MoonPage;
