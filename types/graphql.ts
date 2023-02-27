import { NextApiRequest, NextApiResponse } from "next";
import generateDatasources from "../graphql/datasources";

export interface ContextValue {
  req: NextApiRequest;
  res: NextApiResponse;
  user?: any;
  token?: string;
  dataSources: ReturnType<typeof generateDatasources>;
}
