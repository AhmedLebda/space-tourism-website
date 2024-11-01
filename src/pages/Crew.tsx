import { useParams } from "react-router-dom";
import { crew } from "../data/crew";
import Pagination from "../components/pagination";

const crewNames = crew.map(member => member.name)

const Crew = () => {
    const { name } = useParams();

    const currentCrewMember = crew.find(member => member.name === name) || crew[0]
    return (
        <div className="h-full grid gap-4 grid-cols-1 md:grid-cols-2 text-center md:text-left max-w-screen-lg mx-auto place-items-center p-8">

            <div className="px-6 py-14 flex flex-col gap-6 self-stretch">
                <h3 className="text-white/80 uppercase text-xl md:text-3xl tracking-wider">{currentCrewMember.role}</h3>
                <p className="uppercase text-3xl md:text-5xl">{currentCrewMember.name}</p>
                <p className="mb-auto">{currentCrewMember.bio}</p>
                <Pagination items={crewNames} path="/crew" />
            </div>

            <div className="max-w-72 md:max-w-80">
                <img src={currentCrewMember.image} alt={currentCrewMember.name} className="max-w-full" />
            </div>
        </div>
    )
}

export default Crew