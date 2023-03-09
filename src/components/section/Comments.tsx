import React from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

interface Props { }

interface Inputs {
  name?: string
  comment: string
}

const Comments = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
  }
  const comments = [{
    name: 'test',
    date: new Date(),
    message: 'test comment',
  },
  {
    name: 'test',
    date: new Date(),
    message: 'test comment',
  },
  {
    name: 'test',
    date: new Date(),
    message: 'test comment',
  },
  ]
  return (
    <div>
      <form className='flex flex-col space-y-2 mx-auto max-w-[800px] border border-l-8 border-l-primary p-4' onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Comment*</span>
          <textarea rows={3} {...register('comment')} placeholder='Comment' type="text" />
        </label>
        <label>
          <span>Name</span>
          <input {...register('name')} placeholder='Name' type="text" />
        </label>
        <button type='submit' className='button-primary lg:w-1/2'>Submit</button>
      </form>
      <hr className='my-5' />
      <div className='flex flex-col gap-y-2 border-l-2 border-l-primary py-2 pl-1'>
        {
          comments.map((c, i) => (
            <CommentItem {...c} key={i}></CommentItem>
          ))
        }
      </div>
    </div>
  )
}

export default Comments

interface CommentItemProps {
  name: string
  date: Date
  message: string
}

function CommentItem({ name, date, message }: CommentItemProps) {
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
        {message}
      </div>
    </div>
  )
}
