import Logo from "./logo";
import Navbar from "./navbar/navbar";


const Header = () => {

    return (
        <header className="flex justify-between gap-6 items-center p-6 ">
            <Logo />
            <span className="hidden md:block relative w-full h-[1px] bg-white/25 -mr-12 z-30"></span>
            <Navbar />
        </header>
    )
}

export default Header