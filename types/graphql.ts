import { NextApiRequest, NextApiResponse } from "next";
import generateDatasources from "../graphql/datasources";

export interface ContextValue {
  req: NextApiRequest;
  res: NextApiResponse;
  user?: any;
  token: string | null;
  dataSources: ReturnType<typeof generateDatasources>;
}
