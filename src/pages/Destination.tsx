import { useParams } from "react-router-dom";
import Menu from "../components/menu/menu"
import { destinations } from "../data/destinations";
import Typography from "../components/typography/typography";


const destinationNames = destinations.map(destination => destination.name);

const Destination = () => {
    const { planet } = useParams();
    const currentDestination = destinations.find(destination => destination.name === planet) || destinations[0]
    return (
        <section className="h-full grid gap-y-14 grid-cols-1 grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2 text-center md:text-left place-items-center md:px-4 mx-auto max-w-screen-lg px-6">
            <div className="max-w-48 md:max-w-72 mt-6">
                <img src={currentDestination.image} alt={currentDestination.name} className="max-w-full" />
            </div>

            <article className="flex flex-col gap-4 py-6">
                <Menu items={destinationNames} path="/destination" />

                <Typography variant="h1" as="h1" className="font-bellefair mt-4 uppercase">{currentDestination.name}</Typography>

                <Typography variant="body" as="p" className="pb-6 mb-4 border-b border-white/40 text-balance md:text-pretty md:text-xl">{currentDestination.description}
                </Typography>

                <div className="flex justify-around text-lg">
                    <Typography variant="h6" as="p">
                        <Typography variant="h5" as="span" className="block uppercase">avg. distance</Typography> {currentDestination.distance}
                    </Typography>
                    <Typography variant="h6" as="p">
                        <Typography variant="h5" as="span" className="block uppercase">est. travel time</Typography> {currentDestination.travel}
                    </Typography>
                </div>
            </article>

        </section>
    )
}

export default Destination