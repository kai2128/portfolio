import React from 'react'
import CommentsForm from './CommentsForm'
import CommentsList from './CommentsList'
import { useCommentsStore } from '@/stores/comment'

interface Props { }

const Comments = (props: Props) => {
  const { usePageViewQuery } = useCommentsStore()
  const { data: pageView } = usePageViewQuery()
  return (
    <div>
      <div className='absolute right-0 top-0'>
        <div className='flex items-center mr-2 md:mr-7 mt-1 gap-x-1 md:gap-x-2'>
          Total page views
          <div className='bg-primary text-background px-2 text-left'>{pageView}</div>
        </div>
      </div>
      <CommentsForm></CommentsForm>
      <hr className='my-5' />
      <CommentsList></CommentsList>
    </div>
  )
}

export default Comments
