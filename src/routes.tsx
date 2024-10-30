import MainLayout from "./pages/layouts/MainLayout";
import Home from "./pages/Home";
import Error from "./pages/404";
import DestinationLayout from "./pages/layouts/DestinationLayout";
import Destination from "./pages/Destination";

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
            {
                path: "destination",
                element: <DestinationLayout />,
                children: [
                    {
                        index: true,
                        element: <Destination />,
                    },
                    {
                        path: ":planet",
                        element: <Destination />,
                    }
                ]
            }
        ],
    },
];

export default routes;
