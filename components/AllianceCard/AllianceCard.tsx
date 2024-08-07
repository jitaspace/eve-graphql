import {
  createStyles,
  Image,
  Modal,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useState } from "react";
import AllianceCardDetailed from "./AllianceCardDetailed";

const useStyles = createStyles((theme) => ({
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.xl,
    height: 192,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
  },
}));

interface Props {
  alliance: {
    id: string;
    name: string;
    images: {
      url: string;
    }[];
  };
}

const AllianceCard = ({ alliance: { id, name, images } }: Props) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const [imgSrc, setImgSrc] = useState(images[0].url + "?size=128");

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
        {opened && <AllianceCardDetailed allianceId={id} />}
      </Modal>
      <UnstyledButton className={classes.item} onClick={() => setOpened(true)}>
        <Image
          src={imgSrc}
          alt={name ?? id}
          width={128}
          height={128}
          fit="contain"
          onError={() => {
            console.warn("Error loading image of alliance", id, name);
            setImgSrc("https://images.evetech.net/alliances/1/logo?size=128");
          }}
        />
        <Title order={5}>{name}</Title>
      </UnstyledButton>
    </>
  );
};

export default AllianceCard;
