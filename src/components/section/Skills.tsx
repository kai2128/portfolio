import React from 'react'

interface Props {}

const Skills = (props: Props) => {
  return (
    <>
      <div className='section-subheading'>Programming languages</div>
      <div className='section-body'>
        {/* about.content */}
        HTML, CSS, JavaScript & TypeScript, PHP, Python Java, C++, SQL
      </div>

      <div className='section-subheading'>Web development</div>
      <div className='section-body flex gap-x-10 flex-wrap flex-col md:flex-row'>
        <div>
          <div className='section-subheading2'>
            Frontend
          </div>
          <div>
            Vue, React, Next.js, Nuxt
          </div>
        </div>
        <div>
          <div className='section-subheading2'>
            Backend
          </div>
          <div>
            Laravel
          </div>
        </div>
        <div>
          <div className='section-subheading2'>UI/UX</div>
          <div>
            TailwindCSS, UnoCSS, Sass
          </div>
        </div>
        <div>
          <div className='section-subheading2'>Libraries / tools</div>
          <div>
            GSAP, three.js, vite, webpack, ESLint, node.js, GraphQL, sanity, hygraph
          </div>
        </div>
      </div>

      <div className='section-subheading'>Mobile development</div>
      <div className='section-body'>
        React Native, Swift
      </div>

      <div className='section-subheading'>Game development</div>
      <div className='section-body'>
        Unity, C#
      </div>

      <div className='section-subheading'>Database</div>
      <div className='section-body'>
        MySQL, MongoDB, SQLite
      </div>

      <div className='section-subheading'>CI/CD</div>
      <div className='section-body'>
        GitHub Actions
      </div>

      <div className='section-subheading'>Software / Tools</div>
      <div className='section-body'>
        VSCode, Figma, Git, GitHub, Blender, Photoshop
      </div>
    </>
  )
}

export default Skills
