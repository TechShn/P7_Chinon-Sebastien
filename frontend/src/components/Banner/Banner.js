import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
//import ToogleBtn from '../ToogleBtn/toogleBtn';


function Banner(props) {
    const text = "Salut Tout le monde !!!"
    console.log(props);
    return <div className="block-banner">
        
        <img src={logo} alt="Logo groupomania" className='banner-logo' />
        <h1 className='banner-title'>{text.toUpperCase()}</h1>
        <ul>
            <Link to="auth/signin"><li>login</li></Link>
            <Link to="auth/signup"><li>sign up</li></Link>
        </ul>
        
    </div>


}

export default Banner;

