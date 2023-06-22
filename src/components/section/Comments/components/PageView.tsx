import React from 'react'
import clsx from 'clsx'
import { useCommentsStore } from '@/stores/comment'

interface Props { }

const PageView = (props: Props) => {
  const { usePageViewQuery } = useCommentsStore()
  const { data: pageView, isLoading: pageViewLoading } = usePageViewQuery()

  return (
    <div className='absolute -right-7 -top-10'>
      <div className='flex items-center mr-2 md:mr-7 mt-1 gap-x-1 md:gap-x-2 relative'>
        <div className='flex items-center gap-x-1'>
          Recent views
          <div className={clsx('bg-primary text-background px-2 text-left', pageViewLoading && 'animate-flash bg-secondary-background h-5 w-10')}>
            {pageView}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageView
