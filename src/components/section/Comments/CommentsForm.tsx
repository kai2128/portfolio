import clsx from 'clsx'
import React from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useToastStore } from '@/stores/toast'
import { useCommentsStore } from '@/stores/comment'
import PageView from './components/PageView'

interface Inputs {
  name?: string
  comment: string
}

function CommentsForm() {
  const { formInputs, useCreateCommentMutation, presistForm } = useCommentsStore()
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<Inputs>({
    defaultValues: {
      ...formInputs.get(),
    },
  })
  presistForm(watch())
  const { notify } = useToastStore()
  const createCommentMutation = useCreateCommentMutation()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    createCommentMutation.mutate(formData, {
      onSuccess() {
        reset({
          comment: '',
        })
        notify('Comment created')
      },
    })
  }
  const onError = () => {
    notify('Comment is required')
  }

  return (
    <form aria-disabled={createCommentMutation.isLoading} className='mt-5 flex flex-col space-y-2 mx-auto max-w-[800px] border border-l-8 border-l-primary p-4 relative' onSubmit={handleSubmit(onSubmit, onError)}>
      <label className={clsx(errors.comment && 'error')}>
        <span>Comment*</span>
        <textarea disabled={createCommentMutation.isLoading} rows={3} {...register('comment', { required: true })} placeholder='Comment' />
      </label>
      <label>
        <span>Name</span>
        <input disabled={createCommentMutation.isLoading} {...register('name')} placeholder='Name' type="text" />
      </label>
      <button type='submit' className='button-primary lg:w-1/2' disabled={createCommentMutation.isLoading}>
        {createCommentMutation.isLoading ? 'Loading' : 'Submit'}
      </button>
      <PageView></PageView>
    </form>
  )
}

export default CommentsForm
