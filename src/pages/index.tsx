import Head from 'next/head'
import About from '@/components/About'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | kai2128</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-screen h-screen overflow-y-auto overflow-x-hidden bg-gradient snap-y snap-mandatory'>
        <header>
          <Navbar></Navbar>
        </header>

        <Hero></Hero>

        <About></About>

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
