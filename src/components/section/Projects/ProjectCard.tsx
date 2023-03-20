import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

import style from './style.module.scss'

interface ProjectCardProps {
  name: string
  description: string
  imgUrl?: string
  url: string
  tags: string[]
  categories?: string[]
}

function ProjectCard({ name, description, imgUrl, url, tags }: ProjectCardProps) {
  return (
    <div className={style.card}>
      <div className='bg-secondary-background flex flex-col md:w-[360px] w-full'>
        <div className='w-full relative h-[230px]'>
          <div className='absolute bg-background rounded-full flex items-center justify-center shadow bottom-0 left-0 m-2 p-2'>
            <Link href={url} target='_blank' referrerPolicy='no-referrer' className='icon-link'>
              <BsBoxArrowUpRight></BsBoxArrowUpRight>
            </Link>
          </div>
          {
            imgUrl
              ? <img className='w-full h-full object-cover' src={imgUrl} alt={'{name} image'} />
              : <div className='bg-primary/50 w-full h-full'></div>
          }
        </div>
        <div className='px-3'>
          <div className='text-xl mb-2 mt-3 font-semibold'>
            {name}
          </div>
          <div className="prose prose-p:text-base prose-p:leading-[1.4] mb-3">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {description}
            </ReactMarkdown>
          </div>
          <div className='flex text-sm overflow-y-auto gap-x-5 scrollbar-thin scrollbar-thumb-secondary pb-2'>
            {tags.map(t => (
              <span className='text-primary/50 whitespace-pre' key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
