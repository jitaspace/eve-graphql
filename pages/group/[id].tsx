import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { GroupCardDetailed } from '../../components/GroupCard';

const GroupPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <GroupCardDetailed groupId={id} />;
};

GroupPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default GroupPage;
