import { Outlet } from "react-router-dom"
import PageTitle from "../../components/page_title"

const TechnologyLayout = () => {
    return (
        <>
            <PageTitle number={3} text="space launch 101" />
            <Outlet />
        </>

    )
}

export default TechnologyLayout