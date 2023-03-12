import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useStore } from '@nanostores/react'
import { persistentMap } from '@nanostores/persistent'
import type { PublishCommentMutation } from './../gql/graphql'
import { GET_COMMENTS } from '@/queries'
import { gqlClient } from '@/utils/grapql-client'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Inputs = {
  name?: string
  comment: string
}

export const formInputs = persistentMap<Inputs>('inputs:', {
  name: '',
  comment: '',
})

export function useCommentsStore() {
  const queryClient = useQueryClient()
  return {
    presistForm(inputs: Inputs) {
      formInputs.set(inputs)
    },
    formInputs: useStore(formInputs),
    useCommentsQuery: () => useQuery(['comments'], async () => gqlClient.request(GET_COMMENTS)),
    useCreateCommentMutation: () => useMutation(async (data: Inputs): Promise<PublishCommentMutation> => {
      return fetch('/api/comment/create', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(r => r.json())
    }, {
      onSuccess: ({ publishComment }) => {
        queryClient.setQueryData(['comments'], (old) => {
          const oldComments = old.comments
          return {
            comments: [
              ...oldComments, publishComment,
            ],
          }
        })
      },
    }),
  }
}
