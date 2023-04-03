import Link from "next/link";
import Hero from "./components/Hero";
async function getRecentEpisodes() {
  // in parameter param's id will be passed while invoke
  const res = await fetch(
    `https://api.consumet.org/anime/gogoanime/recent-episodes`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error(
      "The gogoanime api is down at the moment please try again later"
    );
  }
  return res.json();
}

export default async function Hpage({ params }: any) {
  let recentEps = await getRecentEpisodes();
  // import movie from "./style/genreCards.module.scss";

  return (
    <div>
      <Hero />
      <h1>{recentEps.id}</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-normal md:mt-[-8rem]">
        {recentEps.results.slice(1, 10).map((p: any) => (
          <li key={p.id} className="my-3">
            {" "}
            <Link href={`/${p.id}`}>
              {" "}
              {/* <Image src={`${p.image}`} alt={p.id} height={300} width={300} /> */}
              <img
                src={p.image}
                alt={p.id}
                className=" h-auto w-1/2 md:h-auto md:w-1/2 lg:h-auto lg:w-2/3 m-auto"
              />
            </Link>
            <div className="h-auto w-1/2 md:h-auto md:w-1/2 lg:h-auto lg:w-2/3 m-auto ">
              <p className="text-white text-sm md:text-lg my-3">{p.title}</p>

              <p className="text-xs mt-2 md:text-lg">
                <span className=" text-secondary "> Episode Number : </span>
                <span className="text-white  "> {p.episodeNumber}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
