import type { NextPage } from 'next'
import Head from 'next/head'

import { Background } from '../components/Landing/Background'
import { Companies } from '../components/Landing/Companies'
import { Footer } from '../components/Landing/Footer'
import { Header } from '../components/Landing/Header'
import { Hero } from '../components/Landing/Hero'
import { Plans } from '../components/Landing/Plans'

const Home: NextPage = () => (
  <>
    <Background />
    <Head>
      <title>PontoGo | Seu sistema de ponto online</title>
    </Head>
    <Header />
    <Hero />
    <Companies />
    <Plans />
    <Footer />
  </>
)

export default Home
