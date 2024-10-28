import MainLayout from "./pages/layouts/MainLayout";
import Home from "./pages/Home";
import Error from "./pages/404";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
];

export default routes;
