import { NavLink } from "react-router-dom";

const ExploreButton = () => {

  return (
    <NavLink to="/destination" className={`before:delay-250 relative z-10 aspect-square w-40 sm:w-56 sm:text-xl rounded-full border-none bg-white font-bellefair uppercase text-primary before:absolute before:inset-0 before:-z-10 before:block before:h-full before:w-full before:rounded-full before:bg-white before:opacity-15 before:transition before:ease-in-out hover:before:scale-150 focus:before:scale-150 inline-grid place-items-center`}>
      explore
    </NavLink>
  );
};

export default ExploreButton;
