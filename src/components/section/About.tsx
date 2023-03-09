import React from 'react'

interface Props {}

function RoleCard({ title }) {
  return (
    <div className='border w-60 aspect-square flex items-center justify-center relative bg-background'>
      <span className='text-7xl absolute text-primary/10 -left-0 -top-0'>#</span>
      <h2 className='text-2xl relative'>
        {title}
      </h2>
    </div>
  )
}

const About = (props: Props) => {
  return (
    <>
      <div className='section-subheading'>Overview</div>
      <div className='section-body'>
        {/* about.content */}
        A year 2 software engineering student looking for an internship in a reputable company to utilize my knowledge and skill for the company as well as to further develop my knowledge in this industry.
      </div>

      <div className='section-subheading'>Languages</div>
      <div className='section-body'>
        Chinese
        English
        Malay
        Japanese
      </div>

      <div className='section-body'>
        <div className='flex flex-wrap gap-10 items-center justify-center'>
          <RoleCard title={'Web Developer'}></RoleCard>
          <RoleCard title={'Game Developer'}></RoleCard>
          <RoleCard title={'Mobile Developer'}></RoleCard>
        </div>
      </div>
    </>
  )
}

export default About
