import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import style from './style.module.scss'

interface Props { }

const Projects = (props: Props) => {
  const projects = [
    {
      name: 'test',
      description: 'desc ',
      tags: ['ts', 'react-native'],
      url: 'github.com',
      img: 'https://source.unsplash.com/random',
    },
    {
      name: 'test',
      description: 'desc',
      tags: ['ts', 'react-native'],
      url: 'github.com',
      img: 'https://source.unsplash.com/random',
    },
    {
      name: 'test',
      description: 'desc',
      tags: ['ts', 'react-native'],
      url: 'github.com',
      img: 'https://source.unsplash.com/random',
    },
    {
      name: 'test',
      description: 'desc',
      tags: ['ts', 'react-native', 'ts', 'react-native', 'ts', 'react-native', 'ts', 'react-native'],
      url: 'github.com',
      img: 'https://source.unsplash.com/random',
    },
  ] as ProjectCardProps[]
  return (
    <>
      <div className='section-subheading'>What I have done so far</div>

      <div className='section-body'>
        <div className='flex flex-wrap md:gap-x-10 gap-x-4 gap-y-5 relative mt-10 border'>
          <div className='absolute -top-8 left-0'>
            <div className='flex gap-x-3 border px-1'>
              <button className={clsx(style['filter-button'], style.active)}>All</button>
              <button className={style['filter-button']}>Filter</button>
              <button className={style['filter-button']}>Filter</button>
            </div>
          </div>
          {
            projects.map((p, i) => (
              <ProjectCard key={i} {...p}></ProjectCard>
            ))
          }
        </div>
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
  date: Date
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
              : <div className='bg-primary w-full h-full'></div>
          }
        </div>
        <div className='px-3'>
          <div className='text-xl mb-2 mt-3 font-semibold'>
            {name}
          </div>
          <div className='text-base mb-3'>
            {description}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore est expedita velit unde a possimus consequatur ducimus voluptates ullam nam saepe, dignissimos libero quae voluptatum illo eum, facere quia tempora.
          </div>
          <div className='flex text-sm overflow-y-auto gap-x-5 scrollbar-thin scrollbar scrollbar-thumb-secondary pb-2'>
            {tags.map(t => (
              <span className='text-primary/50 whitespace-pre' key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
