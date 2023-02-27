import { createStyles, Modal, Title, UnstyledButton } from '@mantine/core';
import { useState } from 'react';
import AttributeCardDetailed from './AttributeCardDetailed';

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
  attribute: {
    id: string;
    name?: string | null;
    displayName?: string | null;
  };
}

const AttributeCard = ({ attribute: { id, name, displayName } }: Props) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const text =
    displayName && displayName.length > 0
      ? displayName
      : name && name.length > 0
      ? name
      : '(no name)';

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
        {opened && <AttributeCardDetailed attributeId={id} />}
      </Modal>
      <UnstyledButton className={classes.item} onClick={() => setOpened(true)}>
        <Title order={6}>{text}</Title>
      </UnstyledButton>
    </>
  );
};

export default AttributeCard;
