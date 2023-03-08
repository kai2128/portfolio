import { useEffect } from 'react'
import { atom } from 'nanostores'
import { useStore } from '@nanostores/react'
import { useRouter } from 'next/router'

import { About, Contact, Projects, Skills } from '@/components/section'

// interface SectionState {
//   currentSection: (props: any) => JSX.Element
// }
const validPath = ['#about', '#skills', '#projects', '#contact'] as const
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

function nextSection() {
  const currentSection = currentActive.get()
  let nextSection = validPath[validPath.indexOf(currentSection) + 1]
  if (nextSection === undefined)
    nextSection = validPath[0]
  switchSection(nextSection)
}

function previousSection() {
  const currentSection = currentActive.get()
  let previousSection = validPath[validPath.indexOf(currentSection) - 1]
  if (previousSection === undefined)
    previousSection = validPath.at(-1)!
  switchSection(previousSection)
}

function triggerEntrance() {
  const currentSection = currentActive.get()
  nextSection()
  setTimeout(() => switchSection(currentSection))
}

export function useSectionStore(shouldInit?: boolean) {
  const route = useRouter()
  const currentSectionName = route.asPath.substring(1)

  useEffect(() => {
    if (shouldInit)
      toSection(currentSectionName as ValidSection)
  }, [])

  return {
    CurrentSection: useStore(sectionStore),
    active: useStore(currentActive),
    sectionTitle: useStore(currentActive).substring(1),
    toSection,
    switchSection,
    nextSection,
    triggerEntrance,
    previousSection,
  }
}
