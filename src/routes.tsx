import MainLayout from "./pages/layouts/MainLayout";
import Home from "./pages/Home";
import Error from "./pages/404";
import DestinationLayout from "./pages/layouts/DestinationLayout";
import Destination from "./pages/Destination";
import CrewLayout from "./pages/layouts/CrewLayout";
import Crew from "./pages/Crew";

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
            },
            {
                path: "crew",
                element: <CrewLayout />,
                children: [
                    {
                        index: true,
                        element: <Crew />,
                    },
                    {
                        path: ":name",
                        element: <Crew />,
                    }
                ]
            }
        ],
    },
];

export default routes;
