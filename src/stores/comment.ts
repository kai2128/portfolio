import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { persistentMap } from '@nanostores/persistent'
import type { CreateCommentMutation } from './../gql/graphql'

import { gqlClient } from '@/utils/grapql-client'
import { GET_COMMENTS } from '@/queries'

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
    formInputs,
    useCommentsQuery: () => useInfiniteQuery({
      queryKey: ['comments'],
      queryFn: async ({ pageParam = null }) => gqlClient.request(GET_COMMENTS, { first: 30, after: pageParam }),
      getNextPageParam: (lastPage, pages) => lastPage.commentsConnection.pageInfo.endCursor,
    }),
    usePageViewQuery: () => useQuery({
      queryKey: ['ga'],
      queryFn: async () => fetch('./api/ga').then(res => res.json()),
    }),
    useCreateCommentMutation: () => useMutation(async (data: Inputs): Promise<CreateCommentMutation> => {
      return fetch('/api/comment/create', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(r => r.json())
    }, {
      onSuccess: (result) => {
        queryClient.setQueryData(['comments'], (old) => {
          const firstPage = old.pages[0].commentsConnection.edges || []
          const newFirstPage = [{ node: result.createComment }, ...firstPage]
          const newComments = { ...old }
          newComments.pages[0].commentsConnection.edges = newFirstPage
          return newComments
        })
      },
    }),
  }
}
