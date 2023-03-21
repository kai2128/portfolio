import React, { useEffect, useRef } from 'react'
import { useCommentsStore } from '@/stores/comment'
import { useToastStore } from '@/stores/toast'

interface Props {}

const CommentsList = (props: Props) => {
  const { useCommentsQuery } = useCommentsStore()
  const { notify } = useToastStore()
  const { data, hasNextPage, fetchNextPage } = useCommentsQuery()

  const lastCommentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting && hasNextPage) {
        notify('Loading more comments...')
        fetchNextPage()
      }
      if (isIntersecting && !hasNextPage)
        notify('You have reached the end of comments')
    })
    observer.observe(lastCommentRef.current!)
    return () => {
      observer.disconnect()
    }
  }, [hasNextPage])
  return (
    <div className='flex flex-col gap-y-2 border-l-2 border-l-primary py-2 pl-1 relative'>
      {(data?.pages !== undefined && data.pages[0].commentsConnection.edges.length !== 0)
        ? data?.pages.map(page => (
          page.commentsConnection.edges.map((c, i) => (
            <CommentItem {...c.node} key={c.node.id}></CommentItem>
          ))
        ))
        : <div className='px-2 text-primary/50'>No comments currently...</div>
      }
      <div ref={lastCommentRef} className='bg-red-200 absolute bottom-0 -z-10 opacity-0'>last</div>
    </div>
  )
}

export default CommentsList

interface CommentItemData {
  id: string
  name?: string | null | undefined
  comment?: string | null | undefined
  createdAt: string
}
function CommentItem({ name, comment, createdAt }: CommentItemData) {
  const date = new Date(createdAt)
  return (
    <div className='w-full border p-2 bg-background'>
      <div className='flex gap-5 items-center'>
        <div className='text-2xl text-bold'>
          {name}
        </div>
        <div className='text-primary/70'>
          {date.toLocaleTimeString()} | {date.toDateString()}
        </div>
      </div>
      <div className='p-2 border-t border-t-primary/10'>
        {comment}
      </div>
    </div>
  )
}
