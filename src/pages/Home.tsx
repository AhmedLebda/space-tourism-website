import ExploreButton from "../components/explore-button";
import Typography from "../components/typography/typography";

function Home() {
    return <section className="h-full grid gap-y-14 grid-cols-1 grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2 text-center md:text-left  md:place-items-center md:px-4 mx-auto max-w-screen-lg ">
        <article className="flex flex-col gap-y-4 px-6">
            <Typography variant="h5" as="h1" className="uppercase">
                so, you want to travel to
                <Typography variant="h1" as="span" className="font-bellefair block mt-4">
                    space
                </Typography>
            </Typography>

            <Typography variant="body" as="p">
                Let&apos;s face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!
            </Typography>
        </article>
        <div>
            <ExploreButton />
        </div>
    </section>;
}

export default Home;
