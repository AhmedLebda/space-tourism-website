import { NavLink } from "react-router-dom"

const getNavLinkClassName = (isActive: boolean) => {
  return `bg-white block w-4 aspect-square rounded-full hover:opacity-75 focus:opacity-75 ${isActive ? 'opacity-75' : ''
    }`;
};

interface PaginationProps {
  count: number;
  path: string;
}

const Pagination = ({ count, path }: PaginationProps) => {
  if (!path || path === '/') path = '';

  return (
    <nav className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, index) => <NavLink key={index} to={`${path}/${index}`} className={({ isActive }) => getNavLinkClassName(isActive)}>
        <span className="sr-only">next page</span>
      </NavLink>)}
    </nav>
  )
}

export default Pagination