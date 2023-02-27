import type { CodegenConfig } from "@graphql-codegen/cli";
import { preset } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphqls",
  documents: "{components,layouts,pages}/**/!(*.d).{ts,tsx,graphql}",
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    // client
    "./generated/graphql.ts": {
      plugins: [
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    //server
    "./graphql": {
      preset,
      plugins: [],
      presetConfig: {
        mode: "merged",
        typesPluginsConfig: {
          contextType: "../types/graphql#ContextValue",
        },
      },
    },
    // introspection
    "./generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};

export default config;
