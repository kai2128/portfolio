import Head from 'next/head'
import type { GetStaticProps } from 'next'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SectionLayout from '@/layouts/SectionLayout'
import { useSectionStore } from '@/stores/section'
import Background from '@/components/Background'
import { gqlClient } from '@/utils/grapql-client'
import { GET_ABOUT, GET_COMMENTS, GET_CONTACT, GET_PROJECT, GET_SKILL } from '@/queries'
import type { AboutQueryQuery, ContactQueryQuery, ProjectQueryQuery, SkillQueryQuery } from '@/gql/graphql'
import { useDataStore } from '@/stores/data'

export const getStaticProps: GetStaticProps<Props> = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['comments'],
    queryFn: () => gqlClient.request(GET_COMMENTS),
  })

  const about = await gqlClient.request(GET_ABOUT)
  const skills = await gqlClient.request(GET_SKILL)
  const projects = await gqlClient.request(GET_PROJECT)
  const contact = await gqlClient.request(GET_CONTACT)
  return {
    props: {
      about: about.abouts[0],
      skills: skills.skills[0],
      projects: projects.projects,
      contact: contact.contacts[0],
      dehydratedState: dehydrate(queryClient),
    },
  }
}

interface Props {
  about: AboutQueryQuery['abouts'][number]
  skills: SkillQueryQuery['skills'][number]
  projects: ProjectQueryQuery['projects']
  contact: ContactQueryQuery['contacts'][number]
}

export default function Home({ about, skills, projects, contact }: Props) {
  const { CurrentSection } = useSectionStore(true)
  useDataStore({ about, skills, projects, contact })

  return (
    <>
      <Head>
        <title>Portfolio | kai2128</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-screen h-screen overflow-y-auto overflow-x-hidden bg-gradient scrollbar-thin scrollbar-thumb-primary/80 scrollbar-track-background/70'>
        <header>
          <Navbar></Navbar>
        </header>

        <Hero></Hero>

        <SectionLayout>
          {/* {about.overview} */}
          <CurrentSection></CurrentSection>
        </SectionLayout>

        <Background></Background>

        {/* <section>
          About me
        </section>

        <section>
          Experience
        </section>

        <section>
          Skills
        </section>

        <section>
          Projects
        </section>

        <section>
          Contact Me
        </section>

        <section>
          Guest Message board
        </section> */}

        <footer></footer>
      </main>
    </>
  )
}
