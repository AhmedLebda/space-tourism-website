import { NavLink } from "react-router-dom"

const getNavLinkClassName = (isActive: boolean) => {
  return `bg-white block w-4 aspect-square rounded-full  hover:opacity-100 focus:opacity-100 ${isActive ? 'opacity-100' : 'opacity-30'
    }`;
};

interface PaginationProps {
  items: string[];
  path: string;
}

const Pagination = ({ items, path }: PaginationProps) => {


  return (
    <nav className="flex items-center justify-center md:justify-start gap-6">
      {items.map((item, index) => {
        const toPath = index === 0 ? path : `${path}/${item}`;
        return <NavLink key={item} end={index === 0} to={toPath} className={({ isActive }) => getNavLinkClassName(isActive)}>
          <span className="sr-only">next page</span>
        </NavLink>
      })}
    </nav>
  )
}

export default Pagination