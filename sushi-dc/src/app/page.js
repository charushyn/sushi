import Header from "./UI/Header"
import SecondBlock from "./UI/SecondBlock"
import Greeting from "./UI/Greeting"
import ThirdBlock from "./UI/ThirdBlock"
import FourthBlock from "./UI/FourthBlock"
import FifthBlock from "./UI/FifthBlock"
import Footer from "./UI/Footer"
import AlertWrapper from "./UI/AlertWrapper"

export default function Home() {
  return (
    <div>
      <AlertWrapper></AlertWrapper>
      <Header></Header>
      <Greeting></Greeting>
      <SecondBlock></SecondBlock>
      <ThirdBlock></ThirdBlock>
      <FourthBlock></FourthBlock>
      <FifthBlock></FifthBlock>
      <Footer></Footer>
    </div>

  )
}
