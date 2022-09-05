import Banner from "./Banner/Banner.js"
import Cart from "./Cart/Cart.js"
import TalkSpace from "./Talkspace/TalkSpace.js"
import Footer from "./Footer/Footer.js"
import "../App.scss"


function App() {
  return <div className="page">
    <Banner />
    <Cart />
    <TalkSpace />
    <Footer />
  </div>
}

export default App