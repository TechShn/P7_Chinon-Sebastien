import "../App.scss";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
//import Home from "./Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from "../components/Banner/Banner";
import Home from "./Home"
import BannerDown from "../components/Banner/BannerDown";




function App() {
  return <div>
    <BrowserRouter>
      <Routes >
        <Route path="/"  element={<div><Banner /><BannerDown /></div>}/>
        <Route path="/auth/signin"  element={<SignIn />} />
        <Route path="/auth/signup"  element={<SignUp />} />
        <Route path="/acceuil"  element={<Home  option="postBtnDisplay"/>} />
        <Route path="/acceuil/:id"  element={<Home option="postBtnDisplay" />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App