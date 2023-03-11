import { useStore } from '@nanostores/react'
import { map } from 'nanostores'
import { useEffect } from 'react'
import type { AboutQueryQuery, ContactQueryQuery, ProjectQueryQuery, SkillQueryQuery } from '@/gql/graphql'

interface AppData {
  about: AboutQueryQuery['abouts'][number]
  skills: SkillQueryQuery['skills'][number]
  projects: ProjectQueryQuery['projects']
  contact: ContactQueryQuery['contacts'][number]
}

const dataStore = map<AppData>()

export function useDataStore(data?: AppData) {
  useEffect(() => {
    if (data)
      dataStore.set(data)
  }, [])
  return {
    data: useStore(dataStore),
  }
}
