import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { StarCardDetailed } from '../../components/StarCard';

const StarPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <StarCardDetailed starId={id} />;
};

StarPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default StarPage;
