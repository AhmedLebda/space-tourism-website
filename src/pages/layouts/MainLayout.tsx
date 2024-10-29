import { Outlet } from "react-router-dom";
import Header from "../../components/header";

const MainLayout = () => {

    return (
        <div className="min-h-screen grid grid-rows-mainLayout font-barlow bg-primary text-white bg-home-mobile xs:bg-home-tablet md:bg-home-desktop bg-cover bg-bottom xs:bg-center overflow-hidden">

            <Header />

            <main className="container mx-auto my-6 ">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;
