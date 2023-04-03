import Link from "next/link";
import Wrapper from "../components/wrapper";
async function topAiring() {
  const anime = await fetch(
    "https://api.consumet.org/anime/gogoanime/top-airing",
    {
      cache: "force-cache",
    }
  );
  if (!anime.ok) {
    throw new Error(
      "The gogoanime api is down at the moment please try again later"
    );
  }
  return anime.json();
}

export default async function MostPopular() {
  const topAiringData = await topAiring();

  return (
    <div>
      <div>Anime Movies</div>
      <Wrapper>
        <ul className="grid grid-cols-2 gap-4 gap-y-16 w-11/12 md:grid-cols-3  mx-auto">
          {topAiringData.results.slice(1, 10).map((p: any) => (
            <li key={p.id}>
              <Link href={`/recent-episodes/${p.id}`}>
                <img
                  src={p.image}
                  alt="anime poster"
                  className="bg-cover h-auto w-full mx-auto sm:w-2/3"
                />
              </Link>
              <p className="my-2">{p.animeTitle}</p>
              <div className="text-whitebg-cover h-auto w-full mx-auto sm:w-2/3 text-white ">
                <p className="text-xs md:text-lg sm:my-3 md:my-6 ">
                  <span className="text-secondary"> Name : </span>
                  {p.title}
                </p>
                <p>
                  <Link
                    href={`/recent-episodes/${p.id}`}
                    className=" border md:border-2 hover:border-white hover:text-secondary border-secondary transition-all rounded-md px-2 py-1 md:px-6 md:py-2 text-xs md:text-lg"
                  >
                    {" "}
                    See info
                  </Link>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Wrapper>
    </div>
  );
}
