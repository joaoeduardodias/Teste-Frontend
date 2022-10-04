import { Smoke } from './Smoke'
import { Star } from './Star'

export function Background(): JSX.Element {
  return (
    <>
      <Smoke src="./fumaca1.png" top="-5%" right="0" />
      <Smoke src="./fumaca2.png" left="0" top="24%" />
      <Smoke src="./fumaca3.png" bottom="1%" />
      <Star src="./Star4.png" top="30%" left="42%" />
      <Star src="./Star3.png" top="46%" left="79%" />
      <Star src="./Star5.png" top="63%" left="83%" />
      <Star src="./Star2.png" top="86%" left="4%" />
      <Star src="./Star6.png" top="91%" left="83%" />
    </>
  )
}
