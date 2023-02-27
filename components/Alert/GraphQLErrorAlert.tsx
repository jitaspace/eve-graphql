import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import { ApolloError } from '@apollo/client';

interface Props {
  error?: ApolloError;
}

const GraphQLErrorAlert = ({ error }: Props) => {
  return (
    <Alert icon={<IconAlertCircle size={32} />} title={'Bummer!'} color="red" radius="md">
      Something went wrong: {error?.message ?? 'An unknown error occurred!'}
    </Alert>
  );
};

export default GraphQLErrorAlert;
