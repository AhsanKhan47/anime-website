import React from 'react'
import style from "../../style/movie.module.scss"

// get anime card details
async function getMoviesDetails(id: string) {
  const res = await fetch(`https://gogoanime.consumet.org/anime-details/${id}`)
  return res.json();
}


async function getMoviesCard() {
  const res1 = await fetch("https://gogoanime.consumet.org/anime-movies")
  const myData = res1.json()
  return myData;

}

async function getMoviesPath(params: any) {
  const myData = await (getMoviesCard());
  const cardInfo1 = myData.find(
    (card: any) => card.animeId == params.info
  )
  return cardInfo1;
}


export default async function MoviesCard({ params }: any) {

  const cardInfo1 = await (getMoviesPath(params))
  const { animeImg, animeTitle } = cardInfo1


  //anime detials card
  const cardDetail = await (getMoviesDetails(params.info))
  let { type, episodesAvailable, releasedDate, status, genres, otherNames, episodesAvaliable, } = cardDetail;
  genres = genres.map((g: string) => g)

  return (
    <div>

      <div>

        <h1 className={style.heading}>Popular Anime of 2023</h1>
        <div className={style.card}>
          <div className={style.imgCont}>
            <img src={animeImg} alt="card img" />
          </div>



          <div className={style.cardInfo}>
            <h2 > <span className={style.yellowGreen}> Name :  </span> {animeTitle}</h2>
            <h3 > <span className={style.yellowGreen}> type :  </span>{type}</h3>
            <h3 > <span className={style.yellowGreen}> status :  </span>{status}</h3>
            <h3 > <span className={style.yellowGreen}> Released Date :  </span>{releasedDate}</h3>
            <h3 > <span className={style.yellowGreen}> genres :  </span>{genres}</h3>
            <h3 > <span className={style.yellowGreen}> otherNames :  </span>{otherNames}</h3>

          </div>
        </div>

      </div>


    </div>
  )
}
