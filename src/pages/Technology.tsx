
import { useParams } from "react-router-dom";
import { technologies } from "../data/technologies"
import NumberedPagination from "../components/numbered_pagination";
import Typography from "../components/typography/typography";

const techNames = technologies.map(technology => technology.name);

const Technology = () => {
    const { technology } = useParams();
    const currentTechnology = technologies.find(item => item.name === technology) || technologies[0]


    return (
        // <div className="h-full grid gap-4 grid-cols-1 md:grid-cols-2 text-center md:text-left ">
        <section className="h-full grid gap-y-6 grid-cols-1 grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2 text-center md:text-left place-items-center mx-auto max-w-screen-xl">

            <div className="h-full p-8 flex flex-col md:flex-row gap-6 self-start items-center">
                <NumberedPagination items={techNames} path="/technology" />
                <article className="flex flex-col gap-6">
                    <Typography variant="h5" as="h1" className="text-white/60 uppercase font-bellefair tracking-wide">
                        the terminology...
                    </Typography>

                    <Typography variant="h2" as="body" className="uppercase font-bellefair">
                        {currentTechnology.name}
                    </Typography>

                    <Typography variant="body" as="body" className="mb-10">
                        {currentTechnology.description}
                    </Typography>
                </article>
            </div>

            <div className="row-start-1 md:col-start-2">
                <picture>
                    <source srcSet={currentTechnology.images.landscape} media="(max-width: 765px)" />
                    <img src={currentTechnology.images.portrait} alt={currentTechnology.name} />
                </picture>
            </div>

        </section>
        // </div>
    )
}

export default Technology