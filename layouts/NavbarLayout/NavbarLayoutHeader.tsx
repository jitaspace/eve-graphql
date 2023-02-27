import { Anchor, Burger, Container, createStyles, Group } from "@mantine/core";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import UserMenu from "./UserMenu";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface Props {
  links: { link: LinkProps["href"]; label: string }[];
}

function NavbarLayout({ links }: Props) {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: link.link && router.pathname === link.link,
      })}
    >
      {link.label}
    </Link>
  ));

  return (
    <Container className={classes.header} fluid>
      <Anchor href={"/"} color="dimmed" size="xl">
        JitaSpace
      </Anchor>

      <Group spacing={5} className={classes.links}>
        {items}
        <UserMenu />
      </Group>

      <Burger
        opened={opened}
        onClick={toggle}
        className={classes.burger}
        size="sm"
      />
    </Container>
  );
}

export default NavbarLayout;
