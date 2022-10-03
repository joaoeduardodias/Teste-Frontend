import type { NextPage } from 'next'

import { Background } from '../components/Background'
import { Companies } from '../components/Companies'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

const Home: NextPage = () => (
  <>
    <Background />

    <Header />
    <Hero />
    <Companies />
  </>
)

export default Home
