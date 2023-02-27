import { createStyles, Loader, Table } from '@mantine/core';
import React, { ReactElement } from 'react';
import NavbarLayout from '../layouts/NavbarLayout/NavbarLayout';
import { gql } from '@apollo/client';
import { useGetGraphicsQuery } from '../generated/graphql';
import { GraphQLErrorAlert } from '../components/Alert';

const GET_GRAPHICS_QUERY = gql`
  query GetGraphics {
    graphics {
      id
      collisionFile
      graphicFile
      iconFolder
      sofDna
      sofFactionName
      sofHullName
      sofRaceName
    }
  }
`;

const useStyles = createStyles((theme) => ({
  wrapTdContents: {
    wordWrap: 'break-word',
    maxWidth: '160px',
  },
  fitTdContents: {
    width: '1%',
    whiteSpace: 'nowrap',
  },
}));

export const GraphicsPage = () => {
  const { data, loading, error } = useGetGraphicsQuery();
  const { classes } = useStyles();

  if (loading) return <Loader />;
  if (error || !data) return <GraphQLErrorAlert error={error} />;

  const numCollisionNonnull = data.graphics.filter(
    (graphic) => graphic.collisionFile != null
  ).length;
  const numIconNonnull = data.graphics.filter((graphic) => graphic.iconFolder != null).length;

  const rows = data.graphics.map((graphic) => (
    <tr key={graphic.id}>
      <td>{graphic.id}</td>
      {numCollisionNonnull > 0 && (
        <td className={classes.fitTdContents}>{graphic.collisionFile}</td>
      )}
      <td className={classes.wrapTdContents}>{graphic.graphicFile}</td>
      {numIconNonnull > 0 && <td className={classes.wrapTdContents}>{graphic.iconFolder}</td>}
      <td className={classes.wrapTdContents}>{graphic.sofDna}</td>
      <td className={classes.wrapTdContents}>{graphic.sofFactionName}</td>
      <td className={classes.fitTdContents}>{graphic.sofHullName}</td>
      <td className={classes.fitTdContents}>{graphic.sofRaceName}</td>
    </tr>
  ));

  return (
    <Table striped highlightOnHover fontSize="xs">
      <thead>
        <tr>
          <th>ID</th>
          {numCollisionNonnull > 0 && <th>Collision File ({numCollisionNonnull})</th>}
          <th>Graphic File</th>
          {numIconNonnull > 0 && <th>Icon Folder ({numIconNonnull})</th>}
          <th>SOF DNA</th>
          <th>
            SOF
            <br />
            Faction Name
          </th>
          <th>
            SOF
            <br />
            Hull Name
          </th>
          <th>
            SOF
            <br />
            Race Name
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

GraphicsPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default GraphicsPage;
