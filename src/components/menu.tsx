import { NavLink } from 'react-router-dom'

const getNavLinkClassName = (isActive: boolean) => {
    return `py-4 uppercase  border-b-2 hover:border-secondary hover:text-secondary  ${isActive ? 'border-b-2 border-secondary' : 'border-transparent'
        }`;
};

interface MenuProps {
    items: string[];
    path?: string
    variant?: "navigation" | "ghost";
}

const Menu = ({ items, path, variant }: MenuProps) => {
    if (!path || path === '/') path = '';
    if (!variant) variant = 'ghost';
    return (
        <nav>
            <ul className={`flex gap-8 px-8 md:px-12 ${variant === "navigation" ? "bg-white/5 backdrop-blur-xl" : ""}`}>
                {items.map((item, index) => <NavLink key={index} to={`${path}/${item}`} className={({ isActive }) => getNavLinkClassName(isActive)}>
                    <span aria-hidden="true" className='mr-1'>{index.toString().padStart(2, '0')}</span>
                    {item}</NavLink>)}
            </ul>
        </nav>
    )
}

export default Menu