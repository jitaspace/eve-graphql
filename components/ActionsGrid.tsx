import { Card, SimpleGrid, SimpleGridBreakpoint } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

interface Props {
  cols?: number;
  breakpoints?: SimpleGridBreakpoint[];
}

export const ActionsGrid: React.FC<PropsWithChildren<Props>> = ({
  children,
  cols = 4,
  breakpoints,
}) => {
  return (
    <Card withBorder radius="md">
      <SimpleGrid
        cols={cols}
        spacing="xl"
        breakpoints={
          breakpoints ?? [
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
          ]
        }
      >
        {children}
      </SimpleGrid>
    </Card>
  );
};

export default ActionsGrid;
