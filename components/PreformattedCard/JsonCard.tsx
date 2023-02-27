import { Paper } from '@mantine/core';

interface Props {
  json: object;
}

const FactionCard = ({ json }: Props) => {
  return (
    <Paper
      radius="xl"
      p="xl"
      m="xl"
      withBorder
      style={{ whiteSpace: 'pre-line', fontSize: 'x-small' }}
    >
      {JSON.stringify(json ?? {}, null, 4).replace(/ /g, '\u00A0')}
    </Paper>
  );
};

export default FactionCard;
