import MenuItems from './menu_items';


interface MenuProps {
    items: string[];
    path: string
}

const Menu = ({ items, path }: MenuProps) => {
    return (
        <nav>
            <ul className="flex px-4 font-semibold md:text-lg gap-6">
                <MenuItems items={items} path={path} numbered={false} />
            </ul>
        </nav>
    )
}

export default Menu