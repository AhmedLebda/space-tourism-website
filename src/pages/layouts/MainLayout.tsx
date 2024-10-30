import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/header";

const MainLayout = () => {
    const location = useLocation();

    const bgImage = location.pathname === "/" ? "home" : location.pathname.split("/")[1]

    return (
        <div className={`min-h-screen grid grid-rows-mainLayout font-barlow bg-primary text-white bg-${bgImage}-mobile xs:bg-${bgImage}-tablet md:bg-${bgImage}-desktop bg-cover bg-bottom xs:bg-center overflow-hidden`}>

            <Header />

            <main className="container mx-auto my-6 ">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;
