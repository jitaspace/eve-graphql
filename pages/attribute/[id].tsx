import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { AttributeCardDetailed } from '../../components/AttributeCard';

const AttributePage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <AttributeCardDetailed attributeId={id} />;
};

AttributePage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default AttributePage;
