import {
  Anchor,
  Container,
  createStyles,
  Footer,
  Space,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import ServerStatusBadge from "../../components/ServerStatusBadge";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 400,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

const FOOTER_HEIGHT = 240;

interface FooterLinksProps {
  data: {
    title?: string;
    links: { label: string; link: string }[];
  }[];
}

function NavbarLayoutFooter({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group, index) => {
    const links = group.links.map((link, index) => (
      <Anchor
        component={Link}
        href={link.link}
        key={index}
        className={classes.link}
      >
        {link.label}
      </Anchor>
    ));

    return (
      <div className={classes.wrapper} key={index}>
        {group.title && <Text className={classes.title}>{group.title}</Text>}
        {links}
      </div>
    );
  });

  return (
    <Footer height={FOOTER_HEIGHT} className={classes.footer} mt="xl">
      <Container className={classes.inner}>
        <div className={classes.logo}>
          {false && (
            <>
              <Title order={3}>JitaSpace</Title>
              <Space h="md" />
            </>
          )}
          <ServerStatusBadge />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="xs" align="center">
          All EVE-related materials are property of{" "}
          <Anchor href="https://ccpgames.com">CCP Games</Anchor> |{" "}
          <Anchor component={Link} href="/about#legal">
            Legal Notice
          </Anchor>
        </Text>
      </Container>
    </Footer>
  );
}

export default NavbarLayoutFooter;
