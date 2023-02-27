import { createStyles, Modal, Title, UnstyledButton } from '@mantine/core';
import { useState } from 'react';
import TypeCardDetailed from './TypeCardDetailed';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.xl,
    height: 192,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

interface Props {
  type: {
    id: string;
    name: string;
    images: {
      url: string;
    }[];
  };
}

const TypeCard = ({ type: { id, name, images } }: Props) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  console.log(id, name, images);

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
        {opened && <TypeCardDetailed typeId={id} />}
      </Modal>
      <UnstyledButton className={classes.item} onClick={() => setOpened(true)}>
        {images?.length > 0 && (
          <Image
            src={images[0].url + '?size=128'}
            width={128}
            height={128}
            style={{ borderRadius: '64px', overflow: 'hidden' }}
          />
        )}
        <Title order={5}>{name}</Title>
      </UnstyledButton>
    </>
  );
};

export default TypeCard;
