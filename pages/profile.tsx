import React, { ReactElement } from 'react';
import NavbarLayout from '../layouts/NavbarLayout';
import { useSession } from 'next-auth/react';
import { AuthenticatedPlayerCard, CharacterCardDetailed } from '../components/CharacterCard';
import { JsonCard } from '../components/PreformattedCard';

const AboutPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Profile</h1>
      {false && (session as any)?.characterId && (
        <CharacterCardDetailed characterId={(session as any)?.characterId} />
      )}
      {(session as any)?.characterId ? (
        <AuthenticatedPlayerCard />
      ) : (
        'Not authenticated - please log in!'
      )}
      {<JsonCard json={session ?? {}} />}
    </div>
  );
};

AboutPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default AboutPage;
