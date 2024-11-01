
import { useParams } from "react-router-dom";
import { technologies } from "../data/technologies"
import NumberedPagination from "../components/numbered_pagination";

const techNames = technologies.map(technology => technology.name);

const Technology = () => {
    const { technology } = useParams();
    const currentTechnology = technologies.find(item => item.name === technology) || technologies[0]


    return (
        <div className="h-full grid gap-4 grid-cols-1 md:grid-cols-2 text-center md:text-left ">
            <div className="h-full p-8 flex flex-col md:flex-row gap-6 self-start items-center">
                <NumberedPagination items={techNames} path="/technology" />
                <div className="flex flex-col gap-4">
                    <span className="text-white/50 text-xl md:text-2xl lg:text-3xl uppercase">the terminology...</span>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl">{currentTechnology.name}</h3>
                    <p className="md:text-lg">{currentTechnology.description}</p>
                </div>
            </div>
            <div className="row-start-1 md:col-start-2 self-center">
                <picture>
                    <source srcSet={currentTechnology.images.landscape} media="(max-width: 765px)" />
                    <img src={currentTechnology.images.portrait} alt={currentTechnology.name} className="h-full md:h-max" />
                </picture>
            </div>
        </div>
    )
}

export default Technology