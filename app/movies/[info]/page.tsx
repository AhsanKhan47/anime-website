import React from 'react'
import popular from "../../style/popular.module.scss"

async function getMoviesCard(){
  const res1 = await fetch("https://gogoanime.consumet.org/anime-movies")
  const myData = res1.json()
  return myData;
  
}

async function getMoviesPath(params: any){
  const myData = await(getMoviesCard());
  const cardInfo1 = myData.find(
    (card:any) => card.animeId == params.info
  )
  return cardInfo1;
}


export default async function MoviesCard({params}:any) {

  const cardInfo1 = await (getMoviesPath(params))
  const {animeImg,animeTitle,releasedDate} = cardInfo1

  return (
    <div>
       <div>

<h2 className={popular.center}>Popular Anime of 2023</h2>
<div className={popular.card}>
<div className={popular.imgCont}>
<img src={animeImg} alt="card img" />
</div>

<div className={popular.cardInfo}>
<h2 > <span className={popular.yellowGreen}> Name:  </span> {animeTitle}</h2>
<img src={popular.animeImg} alt="" />
<h3 > <span className={popular.yellowGreen}> Released Date:  </span>{releasedDate }</h3> 

</div>
</div>

 </div>


      </div>
  )
}
