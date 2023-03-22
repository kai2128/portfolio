import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useDataStore } from '@/stores/data'

interface Props {}

const About = (props: Props) => {
  const { about } = useDataStore().data
  return (
    <>
      <div className='section-subheading'>Overview</div>
      <div className='section-body'>
        <article className="prose prose-p:text-lg prose-p:leading-[1.5] mx-auto">
          <ReactMarkdown remarkPlugins={[remarkGfm]} linkTarget={'_blank'}>
            {about?.overview || ''}
          </ReactMarkdown>
        </article>
      </div>

      <div className='section-subheading'>Education</div>
      <div className='section-body -mt-3'>
        <article className="prose prose-blockquote:bg-secondary-background/40 prose-p:leading-[1.5] mx-auto prose-h5:-my-5  prose-h5:underline">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {about?.education || ''}
          </ReactMarkdown>
        </article>
      </div>

      <div className='section-subheading'>Experience</div>
      <div className='section-body -mt-3'>
        <article className="prose prose-blockquote:bg-secondary-background/40 prose-p:leading-[1.5] mx-auto prose-h5:-my-5 prose-h5:underline">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {about?.experience || ''}
          </ReactMarkdown>
        </article>
      </div>

      <div className='section-subheading'>Languages</div>
      <div className='section-body'>
        {
          about?.languages.map((v, i) => (
            <span key={v}>{v} {i !== about?.languages.length - 1 && '| ' } </span>
          ))
        }
      </div>

      {/* <div className='section-body'>
        <div className='flex flex-wrap gap-10 items-center justify-center'>
          {
            about?.services.map(s => (
              <RoleCard title={s} key={s}></RoleCard>
            ))
          }
        </div>
      </div> */}
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
