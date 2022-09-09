import logo from '../../assets/logo.png';
import ToogleBtn from '../ToogleBtn/toogleBtn';


function Banner(props) {
    const text = "Salut Tout le monde !!!"
    console.log(props);
    return <div className="block-banner">
        
        <img src={logo} alt="Logo groupomania" className='banner-logo' />
        <h1 className='banner-title'>{text.toUpperCase()}</h1>
        <ul>
            <li>sign in</li>
            <li>sign up</li>
        </ul>
        <ToogleBtn />
        
    </div>


}

export default Banner;

