import { Outlet } from "react-router-dom"
import PageTitle from "../../components/page_title"

const CrewLayout = () => {
    return (
        <>
            <PageTitle number={2} text="meet your crew" />
            <Outlet />
        </>
    )
}

export default CrewLayout