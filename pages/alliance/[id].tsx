import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import { AllianceCardDetailed } from "@/components/AllianceCard";
import { NavbarLayout } from "@/layouts";

const AlliancePage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <AllianceCardDetailed allianceId={id} />;
};

AlliancePage.getLayout = (page: ReactElement) => (
  <NavbarLayout>{page}</NavbarLayout>
);

export default AlliancePage;
