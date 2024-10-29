import { NavLink } from "react-router-dom";


const getNavLinkClassName = (isActive: boolean) => {
    return `border-b-2 block py-4 ${isActive ? 'border-secondary' : 'border-transparent hover:border-secondary hover:text-secondary'
        }`;
};

interface MenuItemsProps { items: string[], path?: string, numbered?: boolean }

const MenuItems = ({ items, path, numbered }: MenuItemsProps) => {
    if (!path || path === '/') path = '';
    if (numbered === undefined) numbered = true;
    return (
        <>
            {items.map((item, index) => {
                const toPath = item === "home" ? "/" : `${path}/${item.replace(" ", "-")}`;
                return (
                    <li key={index} className='uppercase'>
                        <NavLink to={toPath} className={({ isActive }) => getNavLinkClassName(isActive)}>
                            {numbered && <span aria-hidden="true" className='mr-2 hidden lg:inline'>{index.toString().padStart(2, '0')}</span>}
                            {item}
                        </NavLink>
                    </li>
                );
            })}
        </>
    )
}

export default MenuItems