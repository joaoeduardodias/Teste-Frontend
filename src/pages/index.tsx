import type { NextPage } from 'next'

import { Smoke } from '../components/Background/Smoke'
import { Star } from '../components/Background/Star'
import { Header } from '../components/Header'

const Home: NextPage = () => (
  <>
    <Smoke src="./fumaca1.png" top="-63px" />
    <Smoke src="./fumaca2.png" left="0" top="1458.73px" />
    <Smoke src="./fumaca3.png" top="1847px" />
    <Star src="./Star4.png" top="36.57rem" left="37.84rem" />
    <Star src="./Star3.png" top="52.38rem" left="73.71rem" />
    <Star src="./Star5.png" top="69.44rem" left="71.68rem" />
    <Star src="./Star2.png" top="98.76rem" left="7.75rem" />
    <Star src="./Star6.png" top="101.56rem" left="76.31rem" />

    <Header />
  </>
)

export default Home
