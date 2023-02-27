import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import NavbarLayout from "../../../../eve-graph/web-explorer/layouts/NavbarLayout";
import { AncestryCardDetailed } from "../../../../eve-graph/web-explorer/components/AncestryCard";

const AncestryPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <AncestryCardDetailed ancestryId={id} />;
};

AncestryPage.getLayout = (page: ReactElement) => (
  <NavbarLayout>{page}</NavbarLayout>
);

export default AncestryPage;
