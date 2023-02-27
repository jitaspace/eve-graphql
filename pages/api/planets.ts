import { NextApiRequest, NextApiResponse } from 'next';

type Data = number[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const x = await fetch('https://api.eve.joao.neto.pt/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: 'query { solarSystems { planets { id } } }',
    }),
  });
  const planetIds = (await x.json()).data.solarSystems.flatMap(
    (solarSystem: { planets: { id: string }[] }) =>
      solarSystem.planets.map((planet: { id: string }) => Number(planet.id))
  );
  res.status(200).json(planetIds);
}
