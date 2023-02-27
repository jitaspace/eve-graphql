import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { EffectCardDetailed } from '../../components/EffectCard';

const EffectPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <EffectCardDetailed effectId={id} />;
};

EffectPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default EffectPage;
