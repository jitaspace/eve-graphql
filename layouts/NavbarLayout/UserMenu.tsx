import {
  Avatar,
  createStyles,
  Group,
  Menu,
  Text,
  UnstyledButton,
} from "@mantine/core";
import {
  IconChevronDown,
  IconLogout,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { showNotification } from "@mantine/notifications";
import Image from "next/image";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[2]
    }`,
    marginBottom: 120,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  tabsList: {
    borderBottom: "0 !important",
  },

  tab: {
    fontWeight: 500,
    height: 38,
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },

    "&[data-active]": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[2],
    },
  },
}));

const UserMenu = () => {
  const { classes, cx } = useStyles();
  const { data: session } = useSession();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const characterId = (session as any)?.characterId ?? "1";

  if (!session) {
    return (
      <Link href="#" onClick={() => signIn("eveonline", { redirect: false })}>
        <Image
          src="https://web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-black-small.png"
          height={30}
          width={195}
          layout="intrinsic"
        />
      </Link>
    );
  }

  const portraitUrl =
    "https://images.evetech.net/characters/" + characterId + "/portrait";

  return (
    <Menu
      width={260}
      position="bottom-end"
      transition="pop-top-right"
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
        >
          <Group spacing={7}>
            <Avatar
              src={portraitUrl}
              alt={session?.user?.name as string}
              radius="xl"
              size={20}
            />
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              {session?.user?.name}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Link href="/profile">
          <Menu.Item icon={<IconUserCircle size={14} stroke={1.5} />}>
            Profile
          </Menu.Item>
        </Link>
        <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
          Settings
        </Menu.Item>
        <Menu.Item
          onClick={async () => {
            await signOut({ redirect: false });
            showNotification({
              title: "Signed out",
              message: "Fly safe! o7",
            });
          }}
          icon={<IconLogout size={14} stroke={1.5} />}
        >
          Logout
        </Menu.Item>

        {/*}
        <Menu.Item icon={<IconHeart size={14} color={theme.colors.red[6]} stroke={1.5} />}>
          Liked posts
        </Menu.Item>
        <Menu.Item icon={<IconStar size={14} color={theme.colors.yellow[6]} stroke={1.5} />}>
          Saved posts
        </Menu.Item>
        <Menu.Item icon={<IconMessage size={14} color={theme.colors.blue[6]} stroke={1.5} />}>
          Your comments
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>Account settings</Menu.Item>
        <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>Change account</Menu.Item>
        <Menu.Item
          onClick={async () => {
            await signOut({ redirect: false });
            showNotification({
              title: 'Signed out',
              message: 'Fly safe! o7',
            });
          }}
          icon={<IconLogout size={14} stroke={1.5} />}
        >
          Logout
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconPlayerPause size={14} stroke={1.5} />}>Pause subscription</Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={14} stroke={1.5} />}>
          Delete account
        </Menu.Item>

        //*/}
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
