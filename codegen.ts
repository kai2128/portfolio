import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://ap-south-1.cdn.hygraph.com/content/clf2oqdbp3yi501umdtstc1rd/master',
  documents: 'src/**/*.ts',
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
}

export default config
