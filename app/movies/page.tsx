import React from 'react'
import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import movie from '../style/movie.module.scss'


async function getAnime() {
  const anime = await fetch("https://gogoanime.consumet.org/anime-movies");
  return anime.json();
}


export default async function MostPopular() {
  const moviesData1 = await getAnime();




  return (
    <div>
      <div className={movie.title}>Anime Movies</div>



      <ul className={movie.main}>
        {moviesData1.map((p: any) => (
          <li key={p.animeId}>

            <Link href={`/movies/${p.animeId}`}>
              <img src={p.animeImg} alt="anime poster" />
            </Link>
            <p>{p.animeTitle}</p>
            <p className={movie.yellowGreen}><Link href={`/movies/${p.animeId}`}> See info</Link></p>

          </li>
        ))}

      </ul>
    </div>
  )

}