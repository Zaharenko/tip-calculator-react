import Logo from "./images/logo.svg"

const Header = () => {
    return (
        <header>
            <img 
                src={Logo} 
                alt="SPLITTER logo" 
                title="SPLITTER logo" 
                loading="lazy" 
            />
        </header>
    )
}

export default Header