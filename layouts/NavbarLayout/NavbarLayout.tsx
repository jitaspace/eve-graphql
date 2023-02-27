import { AppShell, Container, Header } from "@mantine/core";
import React from "react";
import NavbarLayoutFooter from "./NavbarLayoutFooter";
import NavbarLayoutHeader from "./NavbarLayoutHeader";
import { footerLinks, headerLinks } from "./links";

const HEADER_HEIGHT = 50;

function NavbarLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed={false}
      header={
        <Header height={HEADER_HEIGHT} mb="xl">
          <NavbarLayoutHeader links={headerLinks} />
        </Header>
      }
      footer={<NavbarLayoutFooter data={footerLinks} />}
    >
      <Container>{children}</Container>
    </AppShell>
  );
}

export default NavbarLayout;
