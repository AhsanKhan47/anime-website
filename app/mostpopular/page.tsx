import Link from 'next/link';
import popular from '../style/popular.module.scss'

async function getPopularAnime() {
  const res = await fetch("https://gogoanime.consumet.org/popular");
  return res.json();
};

export default async function page() {

  let popularAnime = await (getPopularAnime());
  return (
    <>
      <div className={popular.title}>Most popular</div>



      <ul className={popular.main}>
        {popularAnime.slice(0, 8).map((popular: any) => (
          <li key={popular.animeId}>
            <Link href={`/mostpopular/${popular.animeId}`}>
              <img src={popular.animeImg} alt="most popular image" />
            </Link>
            <p>{popular.animeTitle}</p>
            <h4 className={popular.yg}>Released date : {popular.releasedDate}</h4>
          </li>
        ))}
      </ul>



    </>
  )
}

