import { useParams } from "react-router-dom";
import { crew } from "../data/crew";
import Pagination from "../components/pagination";
import Typography from "../components/typography/typography";

const crewNames = crew.map(member => member.name)

const Crew = () => {
    const { name } = useParams();

    const currentCrewMember = crew.find(member => member.name === name) || crew[0]
    return (
        <section className="h-full grid gap-y-6 grid-cols-1 grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2 text-center md:text-left place-items-center md:px-4 mx-auto max-w-screen-lg px-6">

            <article className="flex flex-col gap-4 py-6">
                <Typography variant="h5" as="h1" className="text-white/60 uppercase font-bellefair tracking-wide">
                    {currentCrewMember.role}
                </Typography>

                <Typography variant="h2" as="body" className="uppercase font-bellefair">
                    {currentCrewMember.name}
                </Typography>

                <Typography variant="body" as="body" className="mb-10">
                    {currentCrewMember.bio}
                </Typography>

                <Pagination items={crewNames} path="/crew" />
            </article>

            <div className="max-w-sm">
                <img src={currentCrewMember.image} alt={currentCrewMember.name} className="max-w-full" />
            </div>
        </section>
    )
}

export default Crew