import { Outlet } from "react-router-dom"
import PageTitle from "../../components/page_title"


const Destination = () => {

    return (
        <>
            <PageTitle number={1} text="pick your destination" />
            <Outlet />
        </>
    )
}

export default Destination