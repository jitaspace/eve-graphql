import { Avatar, createStyles, Group, Text, UnstyledButton } from '@mantine/core';
import React from 'react';
import { IconChevronRight } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },
}));

function HeaderUser() {
  const { classes } = useStyles();

  const isLoggedIn = false;
  return (
    <UnstyledButton className={classes.user} style={{ maxWidth: 300, width: 160 }}>
      <Group>
        <Avatar radius="xl" />

        {isLoggedIn && (
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Name
            </Text>

            <Text color="dimmed" size="xs">
              Email
            </Text>
          </div>
        )}

        {!isLoggedIn && (
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Login
            </Text>
          </div>
        )}

        <IconChevronRight size={14} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}

export default HeaderUser;
