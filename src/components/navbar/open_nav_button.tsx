import BurgerIcon from "../../assets/shared/icon-hamburger.svg"


interface NavOpenButtonProps {
  onClick: () => void
}

const NavOpenButton = ({ onClick }: NavOpenButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="md:hidden"
    >
      <span className="sr-only">Open main menu</span>
      <img src={BurgerIcon} alt="open main menu" />
    </button>
  )
}

export default NavOpenButton