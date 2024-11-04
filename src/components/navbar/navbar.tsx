import { useState } from "react"
import NavOpenButton from "./open_nav_button"
import NavCloseButton from "./close_nav_button"
import MenuItems from "../menu/menu_items"

const navLinks = ["home", "destination", "crew", "technology"];


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const open = () => setMobileMenuOpen(true);
    const close = () => setMobileMenuOpen(false);

    return (
        <nav className="font-semibold tracking-wide z-50">
            {!mobileMenuOpen &&
                <NavOpenButton onClick={open} />
            }

            <ul className={`hidden md:flex text-lg gap-8 bg-white/10 backdrop-blur-xl px-12`}>
                <MenuItems items={navLinks} />
            </ul>

            {mobileMenuOpen && <div className="md:hidden bg-white/10 backdrop-blur-xl fixed top-0 right-0 left-1/2 h-full p-6">
                <NavCloseButton onClick={close} />

                <ul className="flex flex-col gap-4">
                    <MenuItems items={navLinks} />
                </ul>

            </div>}
        </nav>
    )
}

export default Navbar