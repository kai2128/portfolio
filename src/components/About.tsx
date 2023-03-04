import React from 'react'
import SectionLayout from '@/layouts/SectionLayout'

interface Props {}

const About = (props: Props) => {
  return (
    <SectionLayout>
      <h2 className='uppercase text-2xl bg-black text-white px-10 py-1 absolute -top-5 w-1/2'>Introduction</h2>
      <p>About Me</p>

      <p>
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
