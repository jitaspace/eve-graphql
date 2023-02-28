import { createStyles, Modal, Title, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import Image from "next/image";
import StarCardDetailed from "./StarCardDetailed";

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
  star: {
    id: string;
    name: string;
    type: {
      id: string;
    };
  };
}

const StarCard = ({ star: { id, name, type } }: Props) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    "https://images.evetech.net/types/" + type.id + "/icon"
  );

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
        {opened && <StarCardDetailed starId={id} />}
      </Modal>
      <UnstyledButton className={classes.item} onClick={() => setOpened(true)}>
        <Image
          src={imgSrc}
          alt={name}
          width={128}
          height={128}
          style={{ borderRadius: "64px", overflow: "hidden" }}
          onError={() => {
            console.log("ERROR LOADING IMAGE");
            setImgSrc("/logos/eve_white.png");
          }}
        />
        <Title order={5}>{name}</Title>
      </UnstyledButton>
    </>
  );
};

export default StarCard;
