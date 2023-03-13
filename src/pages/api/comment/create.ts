import { GraphQLClient } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { PublishCommentMutation } from './../../../gql/graphql'
import { CREATE_COMMENT, PUBLISH_COMMENT } from '@/queries'

const client = new GraphQLClient(process.env.SECRET_API_URL)
client.setHeader('authorization', process.env.SECRET_HYGRAPH_TOKEN)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PublishCommentMutation>,
) {
  try {
    const comment = await client.request(CREATE_COMMENT, req.body)
    // const comment = await client.request(PUBLISH_COMMENT, { id: id.createComment?.id })
    res.status(200).json(comment)
  }
  catch (err) {
    console.log(err)
  }
}
