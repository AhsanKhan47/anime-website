import movie from "../../style/genre.module.scss"
import Link from "next/link";

async function getGenreDetails(id:any){   // in parameter param's id will be passed while invoke
  const res = await fetch(`https://gogoanime.consumet.org/genre/${id}`);
  return res.json();
}
// async function getGenrePath(params:any){
//    let details = await getGenreDetails(params.id)
//    let specificData = await details.find(
//     (data:any)=> data.animeId == params.id
//    )
//    return specificData;
   

// }



export default async function DynamicHome({params}:any) {
  let genre = params.id
  let genreDetails = await (getGenreDetails(params.id))
  // const {  animeTitle } = GenreDetails;



  return (
    <div>You selected {genre}
    <h1>{genreDetails.animeId}</h1>
    <ul className={movie.main}>
        {genreDetails.slice(1, 10).map((p: any) => (
          <li key={p.animeId}>

            <Link href={`/movies/${p.animeId}`}>
              <img src={p.animeImg} alt="anime poster" />
            </Link>
            <p>{p.animeTitle}</p>
            <div className={movie.btmCard}>
              <p className={movie.yellowGreen}>
                <Link href={`/movies/${p.animeId}`} className={movie.seeInfoBtn}> See info</Link>
              </p>
              <p>
                <span className={movie.yellowGreen}> Released Date : </span>{p.releasedDate}
              </p>
            </div>

          </li>
        ))}

      </ul>
    </div>
  )
}
