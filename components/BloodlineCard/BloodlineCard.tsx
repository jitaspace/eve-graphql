import { createStyles, Modal, Title, UnstyledButton } from '@mantine/core';
import { useState } from 'react';
import BloodlineCardDetailed from './BloodlineCardDetailed';

const useStyles = createStyles((theme) => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.xl,
    height: 50,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

interface Props {
  bloodline: {
    id: string;
    name: string;
  };
}

const BloodlineCard = ({ bloodline: { id, name } }: Props) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        size="lg"
        centered
        radius="xl"
        overlayOpacity={0.5}
        overlayBlur={2}
        withCloseButton={false}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        {opened && <BloodlineCardDetailed bloodlineId={id} />}
      </Modal>
      <UnstyledButton className={classes.item} onClick={() => setOpened(true)}>
        <Title order={5}>{name}</Title>
      </UnstyledButton>
    </>
  );
};

export default BloodlineCard;
