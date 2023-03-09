import React from 'react'

interface Props {}

const Projects = (props: Props) => {
  const projects = [
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
  ] as ProjectCardProps[]
  return (
    <>
      <div className='section-subheading'>What I have done so far</div>

      <div className='section-body'>
        <div className='flex flex-wrap gap-x-5 gap-y-2'>
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
  img: string
  url: string
  tags: string[]
}

function ProjectCard({ name, description, img, url, tags }: ProjectCardProps) {
  return (
    <div className='bg-primary/5 flex flex-col h-30'>
      <div className='h-20'>
        <img className='w-full h-full object-cover' src={img} alt="" />
      </div>
      <div className='p-2'>
        <div className='text-xl'>
          {name}
        </div>
        <div>
          {description}
        </div>
        <div className='flex text-primary/50'>
          {tags.map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
