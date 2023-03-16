import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import style from './style.module.scss'
import { useProjectFilter } from '@/stores/data'

interface Props { }

const Projects = (props: Props) => {
  // const { projects } = useDataStore().data
  const { filteredProjects: projects, FILTER_TAG, currentFilter, switchFilter } = useProjectFilter()
  return (
    <>
      <div className='section-subheading'>What I have done so far</div>

      <div className='section-body'>
        <TransitionGroup component={'div'} className='flex flex-wrap md:gap-x-10 gap-x-4 gap-y-5 relative mt-10 border'>
          <div className='absolute -top-8 left-0'>
            <div className='flex gap-x-3 border px-1'>
              {
                FILTER_TAG.map(tag => (
                  <button onClick={() => switchFilter(tag)} className={clsx(style['filter-button'], currentFilter === tag && style.active)} key={tag}>{tag}</button>
                ))
              }
            </div>
          </div>
            {
              projects.map((p, i) => (
                <CSSTransition nodeRef={p.nodeRef} key={p.id} timeout={500} classNames={style.item}>
                  <ProjectCard key={p.id} {...p}></ProjectCard>
                </CSSTransition>
              ))
            }
        </TransitionGroup>
      </div>
    </>
  )
}

export default Projects

interface ProjectCardProps {
  name: string
  description: string
  img?: string
  url: string
  tags: string[]
  categories?: string[]
}

function ProjectCard({ name, description, img, url, tags }: ProjectCardProps) {
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
            img
              ? <img className='w-full h-full object-cover' src={img} alt={'{name} image'} />
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
