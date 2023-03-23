import Link from "next/link";
import movie from "../style/genreCards.module.scss";

async function getGenreDetails2() {
  // in parameter param's id will be passed while invoke
  const res = await fetch(`https://gogoanime.consumet.stream/genre/action`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error(
      "The gogoanime api is down at the moment please try again later"
    );
  }
  return res.json();
}

export default async function Hpage({ params }: any) {
  let genreDetails = await getGenreDetails2();

  return (
    <div>
      <h1>{genreDetails.animeId}</h1>
      <ul className={movie.main}>
        {genreDetails.slice(1, 10).map((p: any) => (
          <li key={p.animeId}>
            {" "}
            <img src={p.animeImg} alt={p.animeId} />
            <p>{p.animeTitle}</p>
            <div className={movie.btmCard}>
              <p>
                <span className={movie.yellowGreen}> Released Date : </span>
                {p.releasedDate}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
