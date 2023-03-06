import { atom } from 'nanostores'
import { useStore } from '@nanostores/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { About, Contact, Projects, Skills } from '@/components/section'

// interface AppState {
//   currentSection: (props: any) => JSX.Element
// }
const validPath = ['#about', '#contact', '#projects', '#skills'] as const
const sections = {
  '#about': About,
  '#contact': Contact,
  '#projects': Projects,
  '#skills': Skills,
}
export type ValidSection = typeof validPath[number]

export const sectionStore = atom<(props: any) => JSX.Element>(sections['#about'])
export const currentActive = atom<ValidSection>('#about')

function toSection(sectionName: ValidSection) {
  if (!validPath.includes(sectionName))
    return
  document.getElementById('section')?.scrollIntoView()
  if (sections[sectionName] !== sectionStore.get())
    switchSection(sectionName)
}

function switchSection(sectionName: ValidSection) {
  currentActive.set(sectionName)
  sectionStore.set(sections[sectionName])
}

export function useSectionStore(shouldInit?: boolean) {
  const route = useRouter()
  const currentSectionName = route.asPath.substring(1)
  if (shouldInit) {
    useEffect(() => {
      toSection(currentSectionName as ValidSection)
    }, [])
  }

  return {
    CurrentSection: useStore(sectionStore),
    active: useStore(currentActive),
    toSection,
    switchSection,
  }
}
