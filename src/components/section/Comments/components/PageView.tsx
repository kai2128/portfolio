import React from 'react'
import { useCommentsStore } from '@/stores/comment'
import clsx from 'clsx'

interface Props { }

const PageView = (props: Props) => {
  const { usePageViewQuery } = useCommentsStore()
  const { data: pageView, isLoading: pageViewLoading } = usePageViewQuery()

  return (
    <div className='absolute -right-7 -top-10'>
      <div className='flex items-center mr-2 md:mr-7 mt-1 gap-x-1 md:gap-x-2 relative'>
        <div className='flex items-center gap-x-1'>
          Total page views
          <div className={clsx('bg-primary text-background px-2 text-left  min-w-10', pageViewLoading && 'animate-flash bg-secondary-background h-full')}>{pageView}</div>
        </div>
      </div>
    </div>
  )
}

export default PageView
