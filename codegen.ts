import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_BACK_URL}/graphql`,
  documents: "src/gql/**/*.graphql",
  generates: {
    "src/types/gql/": {
      preset: "client",
      presetConfig: { typesPath: "./graphql", gqlTagName: "gql" },
      plugins: [
        // "typescript",
        // "typescript-operations",
        // "typed-document-node"
        // "typescript-react-apollo",
      ],
      config: {
        skipTypename: true,
      },
    },
    "src/types/gql/page.tsx": {
      config: {
        skipTypename: true,
        documentMode: "external",
        importDocumentNodeExternallyFrom: "./graphql",
      },
      preset: "import-types",
      presetConfig: { typesPath: "./graphql" },
    },
  },
};

export default config;
