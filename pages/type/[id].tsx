import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { TypeCardDetailed } from '../../components/TypeCard';

const TypePage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <TypeCardDetailed typeId={id} />;
};

TypePage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default TypePage;
