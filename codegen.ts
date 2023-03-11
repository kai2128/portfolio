import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_API_URL,
  documents: 'src/**/*.ts',
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
}

export default config
