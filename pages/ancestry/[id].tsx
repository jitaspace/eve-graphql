import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import { AncestryCardDetailed } from "@/components/AncestryCard";
import { NavbarLayout } from "@/layouts";

const AncestryPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <AncestryCardDetailed ancestryId={id} />;
};

AncestryPage.getLayout = (page: ReactElement) => (
  <NavbarLayout>{page}</NavbarLayout>
);

export default AncestryPage;
