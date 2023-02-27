import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';
import { CharacterCardDetailed } from '../../components/CharacterCard';

const CharacterPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <CharacterCardDetailed characterId={id} />;
};

CharacterPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default CharacterPage;
