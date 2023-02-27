import { NextApiRequest, NextApiResponse } from 'next';

type Data = number[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const x = await fetch('https://api.eve.joao.neto.pt/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: 'query { solarSystems { stargates { id } } }',
    }),
  });
  const stargateIds = (await x.json()).data.solarSystems.flatMap(
    (solarSystem: { stargates: { id: string }[] }) =>
      solarSystem.stargates.map((stargate: { id: string }) => Number(stargate.id))
  );
  res.status(200).json(stargateIds);
}
