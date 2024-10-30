import { useParams } from "react-router-dom";
import Menu from "../components/menu/menu"
import { destinations } from "../data/destinations";


const destinationNames = destinations.map(destination => destination.name);

const Destination = () => {
    const { planet } = useParams();
    const currentDestination = destinations.find(destination => destination.name === planet) || destinations[0]
    return (
        <div className="h-full grid gap-4 grid-cols-1 md:grid-cols-2 text-center md:text-left max-w-screen-xl mx-auto  place-items-center p-8">
            <div className="max-w-40 sm:max-w-48 md:max-w-72 lg:max-w-full">
                <img src={currentDestination.image} alt={currentDestination.name} className="max-w-full" />
            </div>
            <div className="max-w-sm">
                <Menu items={destinationNames} path="/destination" />
                <h2 className="font-bellefair text-6xl md:text-8xl mt-4 uppercase">{currentDestination.name}</h2>
                <p className="pb-6 mb-4 border-b border-white/40 text-balance md:text-pretty md:text-xl">{currentDestination.description}</p>
                <div className="flex justify-around text-lg">
                    <p><span className="block uppercase">avg. distance</span> {currentDestination.distance}</p>
                    <p><span className="block uppercase">est. travel time</span> {currentDestination.travel}</p>
                </div>
            </div>
        </div>
    )
}

export default Destination