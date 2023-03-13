import { useStore } from '@nanostores/react'
import { atom, computed, map } from 'nanostores'
import { createRef, useEffect } from 'react'
import type { AboutQueryQuery, ContactQueryQuery, ProjectQueryQuery, SkillQueryQuery } from '@/gql/graphql'

interface AppData {
  about: AboutQueryQuery['abouts'][number]
  skills: SkillQueryQuery['skills'][number]
  projects: ProjectQueryQuery['projects']
  contact: ContactQueryQuery['contacts'][number]
}

// section data
const dataStore = map<AppData>()

// project filter
const FILTER_TAG = <const>['all', 'web', 'mobile', 'game', 'dm']
const currentFilter = atom<typeof FILTER_TAG[number]>(FILTER_TAG[0])
export function useDataStore(data?: AppData) {
  useEffect(() => {
    if (data)
      dataStore.set(data)
  }, [])
  return {
    data: useStore(dataStore),
  }
}

export function useProjectFilter() {
  return {
    currentFilter: useStore(currentFilter),
    FILTER_TAG,
    switchFilter: (newTag: typeof FILTER_TAG[number]) => {
      currentFilter.set(newTag)
    },
    filteredProjects: useStore(computed(dataStore, () => {
      const projects = dataStore.get().projects
      projects.forEach(p => {
        p.nodeRef = createRef(null)
      })
      if (currentFilter.get() === 'all')
        return projects

      return projects.filter(project => project.tags.includes(currentFilter.get()))
    })),
  }
}
