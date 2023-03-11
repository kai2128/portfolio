import React from 'react'
import { useDataStore } from '@/stores/data'

interface Props {}

const About = (props: Props) => {
  const { about } = useDataStore().data
  return (
    <>
      <div className='section-subheading'>Overview</div>
      <div className='section-body'>
        {about?.overview}
      </div>

      <div className='section-subheading'>Languages</div>
      <div className='section-body'>
        {
          about?.languages.map(v => (
            <span key={v}>{v} &nbsp;</span>
          ))
        }
      </div>

      <div className='section-body'>
        <div className='flex flex-wrap gap-10 items-center justify-center'>
          {
            about?.services.map(s => (
              <RoleCard title={s} key={s}></RoleCard>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default About

function RoleCard({ title }: { title: string }) {
  return (
    <div className='border w-60 aspect-square flex items-center justify-center relative bg-background'>
      <span className='text-7xl absolute text-primary/10 -left-0 -top-0'>#</span>
      <h2 className='text-2xl relative w-min text-center'>
        {title}
      </h2>
    </div>
  )
}
