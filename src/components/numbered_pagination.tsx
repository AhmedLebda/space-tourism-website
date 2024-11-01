import { NavLink } from "react-router-dom"

const getNavLinkClassName = (isActive: boolean) => {
    return `grid place-items-center block w-12 md:w-14 lg:w-16 aspect-square  rounded-full border hover:bg-white hover:text-black ${isActive ? 'bg-white text-black' : ''
        }`;
};

interface Props {
    items: string[];
    path: string;
}

const NumberedPagination = ({ items, path }: Props) => {


    return (
        <ul className="flex flex-row md:flex-col items-center justify-center md:justify-start gap-6">
            {items.map((item, index) => {
                const toPath = index === 0 ? path : `${path}/${item}`;
                return <li key={item}>
                    <NavLink end={index === 0} to={toPath} className={({ isActive }) => getNavLinkClassName(isActive)}>
                        <span className="sr-only">next page</span>
                        {index + 1}
                    </NavLink>
                </li>
            })}
        </ul>
    )
}

export default NumberedPagination