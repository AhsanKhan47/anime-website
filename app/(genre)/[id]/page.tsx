import movie from "../../style/genreCards.module.scss";
import Link from "next/link";
async function getGenreDetails(id: any) {
  // in parameter param's id will be passed while invoke
  const res = await fetch(`https://gogoanime.consumet.stream/genre/${id}`);
  return res.json();
}

export default async function DynamicHome({ params }: any) {
  let genreDetails = await getGenreDetails(params.id);

  //   const {animeId} = genreDetails
  //   const {  animeTitle } = GenreDetails;

  return (
    <div>
      <h1>{genreDetails.animeId}</h1>
      <ul className={movie.main}>
        {genreDetails.slice(1, 10).map((p: any) => (
          <li key={p.animeId}>
            <Link href={`/subid`}>
              <img src={p.animeImg} alt={p.animeId} />
            </Link>

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
