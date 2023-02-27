import { Paper } from '@mantine/core';
import { DocumentNode, print } from 'graphql/index';

interface Props {
  query: DocumentNode;
}

const FactionCard = ({ query }: Props) => {
  return (
    <Paper
      radius="xl"
      p="xl"
      m="xl"
      withBorder
      style={{ whiteSpace: 'pre-line', fontSize: 'x-small' }}
    >
      {print(query).replace(/ /g, '\u00A0')}
    </Paper>
  );
};

export default FactionCard;
