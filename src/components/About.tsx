import React from 'react'
import SectionLayout from '@/layouts/SectionLayout'

interface Props {}

function RoleCard() {
  return (
    <div>
      # name
    </div>
  )
}

const About = (props: Props) => {
  return (
    <SectionLayout
      decoration={(<div className='bg-dotted h-64 w-64 absolute bottom-10 right-5'></div>)}
    >
      <p className='section-subheading'>About Me</p>

      <p className='section-body'>
        {/* about.content */}
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>

      <div>
        Role...
      </div>
    </SectionLayout>
  )
}

export default About
