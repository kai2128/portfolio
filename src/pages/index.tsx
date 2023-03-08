import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SectionLayout from '@/layouts/SectionLayout'
import { useSectionStore } from '@/stores/section'

export default function Home() {
  const { CurrentSection } = useSectionStore(true)

  return (
    <>
      <Head>
        <title>Portfolio | kai2128</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-screen h-screen overflow-y-auto overflow-x-hidden bg-gradient'>
        <header>
          <Navbar></Navbar>
        </header>

        <Hero></Hero>

        <SectionLayout>
          <CurrentSection></CurrentSection>
        </SectionLayout>

        {/* <About></About> */}

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
