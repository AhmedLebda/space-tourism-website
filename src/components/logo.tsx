import { Link } from 'react-router-dom'
import SiteLogo from "../assets/shared/logo.svg"

const Logo = () => {
    return (
        <Link to="/" className="block w-10 h-10 shrink-0 sm:py-0">
            <span className="sr-only">website logo</span>
            <img src={SiteLogo} alt="website logo" />
        </Link>
    )
}

export default Logo