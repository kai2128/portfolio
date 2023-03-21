import React from 'react'
import { useDataStore } from '@/stores/data'

interface Props { }

const Skills = (props: Props) => {
  const { skills } = useDataStore().data

  return (
    <>
      <div className='section-subheading'>Programming languages</div>
      <div className='section-body'>
        <SkillCards data={skills.programmingLanguage}></SkillCards>
      </div>

      <div className='section-subheading'>Web development</div>
      <div className='section-body flex gap-x-10 flex-wrap flex-col md:flex-row gap-y-2'>
        <div>
          <div className='section-subheading2'>
            Frontend
          </div>
          <div>
            <SkillCards data={skills.frontend}></SkillCards>
          </div>
        </div>
        <div>
          <div className='section-subheading2'>
            Backend
          </div>
          <div>
            <SkillCards data={skills.backend}></SkillCards>
          </div>
        </div>
        <div>
          <div className='section-subheading2'>Libraries / tools</div>
          <div>
            <SkillCards data={skills.libraries}></SkillCards>
          </div>
        </div>
      </div>

      <div className='section-subheading'>Mobile development</div>
      <div className='section-body'>
        <SkillCards data={skills.mobile}></SkillCards>
      </div>

      <div className='section-subheading'>Game development</div>
      <div className='section-body'>
        <SkillCards data={skills.game}></SkillCards>
      </div>

      <div className='section-subheading'>Database</div>
      <div className='section-body'>
        <SkillCards data={skills.database}></SkillCards>
      </div>

      <div className='section-subheading'>CI/CD</div>
      <div className='section-body'>
        <SkillCards data={skills.cicd}></SkillCards>
      </div>

      <div className='section-subheading'>Software / Tools</div>
      <div className='section-body'>
        <SkillCards data={skills.tools}></SkillCards>
      </div>
    </>
  )
}

export default Skills

interface SkillData {
  data: {
    name: string
    iconUrl: string
  }[]
}
function SkillCards(data: SkillData) {
  return (
    <div className='flex flex-wrap gap-x-5 gap-y-2'>
      {
        data.data?.map(s => (
          <div key={s.name} className="flex items-center justify-end gap-x-1 flex-col">
            <img className='w-8 object-cover' src={s.iconUrl} alt={s.name} />
            <span className='text-sm'>{s.name}</span>
          </div>
        ))
      }
    </div>
  )
}
