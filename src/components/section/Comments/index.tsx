import React from 'react'
import CommentsForm from './CommentsForm'
import CommentsList from './CommentsList'

interface Props { }

const Comments = (props: Props) => {
  return (
    <div>
      <CommentsForm></CommentsForm>
      <hr className='my-5' />
      <CommentsList></CommentsList>
    </div>
  )
}

export default Comments
