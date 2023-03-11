import React from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useCommentsStore } from '@/stores/comment'
import { useQueryClient } from '@tanstack/react-query'

interface Props { }

interface Inputs {
  name?: string
  comment: string
}

const Comments = (props: Props) => {
  const { register, handleSubmit, reset } = useForm<Inputs>()
  const { formInputs, useCommentsQuery, useCreateCommentMutation } = useCommentsStore()
  const { data, isLoading } = useCommentsQuery()

  const queryClient = useQueryClient()
  const createCommentMutation = useCreateCommentMutation()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    createCommentMutation.mutate(formData, {
      onSuccess({ publishComment }) {
        reset()
      },
    })
  }
  return (
    <div>
      <form className='flex flex-col space-y-2 mx-auto max-w-[800px] border border-l-8 border-l-primary p-4' onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Comment*</span>
          <textarea rows={3} {...register('comment')} placeholder='Comment' />
        </label>
        <label>
          <span>Name</span>
          <input {...register('name')} placeholder='Name' type="text" />
        </label>
        <button type='submit' className='button-primary lg:w-1/2' disabled={createCommentMutation.isLoading}>Submit</button>
      </form>
      <hr className='my-5' />
      <div className='flex flex-col gap-y-2 border-l-2 border-l-primary py-2 pl-1'>
        {
          data?.comments.map(c => (
            <CommentItem {...c} key={c.id}></CommentItem>
          ))
        }
      </div>
    </div>
  )
}

export default Comments

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
