import ExploreButton from "../components/explore-button";

function Home() {
    return <section className="h-full grid gap-4 grid-cols-1 md:grid-cols-2 text-center md:text-left  md:place-items-center md:p-6">
        <div className="uppercase sm:text-lg leading-relaxed flex flex-col gap-y-4">
            <h1 className="text-xl xs:text-2xl ">so, you want to travel to <span className="font-bellefair text-8xl xs:text-9xl mt-4 block">space</span></h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>

        </div>
        <div>
            <ExploreButton />
        </div>
    </section>;
}

export default Home;
