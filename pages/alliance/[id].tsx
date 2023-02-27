import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import NavbarLayout from "../../../../eve-graph/web-explorer/layouts/NavbarLayout";
import { AllianceCardDetailed } from "../../../../eve-graph/web-explorer/components/AllianceCard";

const AlliancePage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <AllianceCardDetailed allianceId={id} />;
};

AlliancePage.getLayout = (page: ReactElement) => (
  <NavbarLayout>{page}</NavbarLayout>
);

export default AlliancePage;
