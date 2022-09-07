import Banner from "./Banner/Banner.js"
import Cart from "./Cart/Cart.js"
import TalkSpace from "./Talkspace/TalkSpace.js"
import Footer from "./Footer/Footer.js"
import "../App.scss"

const name = "Sébastien Chinon"
const date = Date()
//const member = "Sebastien Chinon"

function App() {
  
  return <div className="page">
    <Banner user1={name} date={date}/>
    <Cart />
    <TalkSpace />
    <Footer />
  </div>
}

export default App