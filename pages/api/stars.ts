import { NextApiRequest, NextApiResponse } from 'next';

type Data = number[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const x = await fetch('https://api.eve.joao.neto.pt/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: 'query { solarSystems { star { id } } }',
    }),
  });
  const starIds = (await x.json()).data.solarSystems.flatMap(
    (solarSystem: { star?: { id: string } }) =>
      solarSystem.star ? Number(solarSystem.star.id) : []
  );
  res.status(200).json(starIds);
}
