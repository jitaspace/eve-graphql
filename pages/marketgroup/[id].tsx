import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import NavbarLayout from "../../layouts/NavbarLayout";
import { Text } from "@mantine/core";

const RacePage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <Text>Sorry, have yet to implement this page!</Text>;
};

RacePage.getLayout = (page: ReactElement) => (
  <NavbarLayout>{page}</NavbarLayout>
);

export default RacePage;
