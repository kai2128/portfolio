import clsx from 'clsx'
import React from 'react'
import style from './style.module.scss'
import ProjectCard from './ProjectCard'
import { useProjectFilter } from '@/stores/data'

interface Props { }

const Projects = (props: Props) => {
  const { filteredProjects: projects, FILTER_TAG, currentFilter, switchFilter } = useProjectFilter()
  return (
    <>
      <div className='section-subheading'>What I have done so far</div>

      <div className='section-body'>
        <div className='flex flex-wrap md:gap-x-10 gap-x-4 gap-y-5 relative mt-10 border justify-center'>
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
                <ProjectCard key={p.id} {...p}></ProjectCard>
              ))
            }
        </div>
      </div>
    </>
  )
}

export default Projects
