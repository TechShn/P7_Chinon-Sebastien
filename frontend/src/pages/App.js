import "../App.scss";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
//import Home from "./Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from "../components/Banner/Banner";
//import Home from "./Home"


//const member = "Sebastien Chinon"

function App() {
  
  return <div>
    <BrowserRouter>
      <Banner />
      <Routes >
        <Route path="/" />
        <Route path="auth/signin"  element={<SignIn />} />
        <Route path="auth/signup"  element={<SignUp />} />
        {/*<Route path="acceuil"  element={<Home />} />*/}

      </Routes>
    </BrowserRouter>
  </div>
}

export default App