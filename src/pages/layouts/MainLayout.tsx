import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/header";


const bgClassesMap: { [key: string]: string } = {
    home: "bg-home-mobile xs:bg-home-tablet md:bg-home-desktop",
    destination: "bg-destination-mobile xs:bg-destination-tablet md:bg-destination-desktop",
    crew: "bg-crew-mobile xs:bg-crew-tablet md:bg-crew-desktop",
}

const MainLayout = () => {
    const location = useLocation();

    const path = location.pathname === "/" ? "home" : location.pathname.split("/")[1]

    return (
        <div className={`${bgClassesMap[path]} min-h-screen grid grid-rows-mainLayout font-barlow bg-primary text-white bg-cover bg-bottom xs:bg-center overflow-hidden`}>

            <Header />

            <main className="mx-auto my-6">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;
