import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="min-h-screen grid grid-rows-mainLayout font-barlow bg-primary text-white bg-home-mobile xs:bg-home-tablet sm:bg-home-desktop bg-cover bg-bottom xs:bg-center">
            <header>
                Header
            </header>

            <main className="container">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;
