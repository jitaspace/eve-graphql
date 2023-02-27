import {
  createStyles,
  MantineColor,
  Text,
  UnstyledButton,
} from "@mantine/core";
import React, { ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import NavbarLayout from "../layouts/NavbarLayout/NavbarLayout";
import {
  IconAffiliate,
  IconArrowsSplit2,
  IconAtom,
  IconBoxMultiple,
  IconBriefcase,
  IconBuildingFortress,
  IconCircle,
  IconCoin,
  IconFlag,
  IconHierarchy,
  IconList,
  IconMap,
  IconPhoto,
  IconSeeding,
  IconStars,
  IconSun,
  IconTank,
  IconUsers,
  IconVectorBezier2,
  TablerIcon,
} from "@tabler/icons";
import ActionsGrid from "../components/ActionsGrid";

const data: {
  title: string;
  icon: TablerIcon;
  color: MantineColor;
  link: LinkProps["href"];
}[] = [
  { title: "Agents", icon: IconBriefcase, color: "grape", link: "/agents" },
  { title: "Alliances", icon: IconStars, color: "red", link: "/alliances" },
  {
    title: "Ancestries",
    icon: IconSeeding,
    color: "violet",
    link: "/ancestries",
  },
  //{ title: 'Asteroid Belts', icon: IconRepeat, color: 'cyan' },
  {
    title: "Bloodlines",
    icon: IconArrowsSplit2,
    color: "pink",
    link: "/bloodlines",
  },
  {
    title: "Categories",
    icon: IconBoxMultiple,
    color: "indigo",
    link: "/categories",
  },
  {
    title: "Constellations",
    icon: IconAffiliate,
    color: "yellow",
    link: "/constellations",
  },
  //{ title: 'Corporations', icon: IconBuilding, color: 'green' },
  {
    title: "Attributes",
    icon: IconCircle,
    color: "grape",
    link: "/attributes",
  },
  { title: "Effects", icon: IconHierarchy, color: "gray", link: "/effects" },
  { title: "Factions", icon: IconFlag, color: "red", link: "/factions" },
  { title: "Graphics", icon: IconPhoto, color: "cyan", link: "/graphics" },
  { title: "Groups", icon: IconList, color: "orange", link: "/groups" },
  { title: "Incursions", icon: IconTank, color: "red", link: "/incursions" },
  {
    title: "Market Groups",
    icon: IconCoin,
    color: "cyan",
    link: "/marketgroups",
  },
  //{ title: 'Moons', icon: IconMoon, color: 'indigo' },
  {
    title: "NPC Corporations",
    icon: IconCoin,
    color: "lime",
    link: "/npc-corporations",
  },
  //{ title: 'Planets', icon: IconPlanet, color: 'blue', link: 'planets' }, // performance issues
  { title: "Races", icon: IconUsers, color: "orange", link: "/races" },
  { title: "Regions", icon: IconMap, color: "dark", link: "/regions" },
  {
    title: "Solar Systems",
    icon: IconVectorBezier2,
    color: "yellow",
    link: "/solarsystems",
  },
  //{ title: 'Stargates', icon: IconArrowsMove, color: 'red', link: 'stargates' }, // performance issues
  { title: "Stars", icon: IconSun, color: "orange", link: "/stars" },
  {
    title: "Stations",
    icon: IconBuildingFortress,
    color: "cyan",
    link: "/stations",
  },
  { title: "Types", icon: IconAtom, color: "gray", link: "/types" },
];

const useStyles = createStyles((theme) => ({
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: 120,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
  },
}));

export default function ExplorePage() {
  const { classes, theme } = useStyles();

  const items = data.map(({ color, icon: Icon, title, link }) => (
    <UnstyledButton
      component={Link}
      href={link}
      key={title}
      className={classes.item}
    >
      <Icon color={theme.colors[color][6]} size={64} stroke={1} />
      <Text size="xs" mt={7}>
        {title}
      </Text>
    </UnstyledButton>
  ));

  return <ActionsGrid cols={6}>{items}</ActionsGrid>;
}

ExplorePage.getLayout = (page: ReactElement) => (
  <NavbarLayout>{page}</NavbarLayout>
);
