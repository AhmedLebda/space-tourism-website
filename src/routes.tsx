import MainLayout from "./pages/layouts/MainLayout";
import Home from "./pages/Home";
import Error from "./pages/404";
import DestinationLayout from "./pages/layouts/DestinationLayout";
import Destination from "./pages/Destination";
import CrewLayout from "./pages/layouts/CrewLayout";
import Crew from "./pages/Crew";
import TechnologyLayout from "./pages/layouts/TechnologyLayout";
import Technology from "./pages/Technology";

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
            ,
            {
                path: "technology",
                element: <TechnologyLayout />,
                children: [
                    {
                        index: true,
                        element: <Technology />,
                    },
                    {
                        path: ":technology",
                        element: <Technology />,
                    }
                ]
            }
        ],
    },
];

export default routes;
