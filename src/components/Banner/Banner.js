import logo from '../../assets/logo.png'

function Banner() {
    const text = "Salut Tout le monde !!!"
    return <div className="block-banner">
        
        <img src={logo} alt="Logo groupomania" className='banner-logo' />
        <h1 className='banner-title'>{text.toUpperCase()}</h1>
        
    </div>
}


export default Banner;