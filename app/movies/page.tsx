import Link from "next/link";
import movie from "../style/movie.module.scss";

async function getAnime() {
  const anime = await fetch("https://gogoanime.consumet.stream/anime-movies");
  if (!anime.ok) {
    throw new Error(
      "The gogoanime api is down at the moment please try again later"
    );
  }
  return anime.json();
}

export default async function MostPopular() {
  const moviesData1 = await getAnime();

  return (
    <div>
      <div className={movie.title}>Anime Movies</div>

      <ul className={movie.main}>
        {moviesData1.slice(1, 10).map((p: any) => (
          <li key={p.animeId}>
            <Link href={`/movies/${p.animeId}`}>
              <img src={p.animeImg} alt="anime poster" />
            </Link>
            <p>{p.animeTitle}</p>
            <div className={movie.btmCard}>
              <p>
                <span className={movie.yellowGreen}> Released Date : </span>
                {p.releasedDate}
              </p>
              <p className={movie.yellowGreen}>
                <Link
                  href={`/movies/${p.animeId}`}
                  className={movie.seeInfoBtn}
                >
                  {" "}
                  See info
                </Link>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
