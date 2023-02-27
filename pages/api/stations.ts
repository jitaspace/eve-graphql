import { NextApiRequest, NextApiResponse } from 'next';

type Data = number[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const x = await fetch('https://api.eve.joao.neto.pt/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: 'query { solarSystems { stations { id } } }',
    }),
  });
  const stationIds = (await x.json()).data.solarSystems.flatMap(
    (solarSystem: { stations: { id: string }[] }) =>
      solarSystem.stations.map((station: { id: string }) => Number(station.id))
  );
  res.status(200).json(stationIds);
}
