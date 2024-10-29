import CloseIcon from "../../assets/shared/icon-close.svg"



interface NavCloseButtonProps {
    onClick: () => void
}

const NavCloseButton = ({ onClick }: NavCloseButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="mb-10 ml-auto block"
        >
            <span className="sr-only">close main menu</span>
            <img src={CloseIcon} alt="close main menu" />
        </button>
    )
}

export default NavCloseButton