import popular from "../../style/popular.module.scss"
async function getPopularCard(){
  const data = await fetch("https://gogoanime.consumet.org/popular");
  const myData = data.json();
  return myData;
}


async function getPopularPath(params:any){
  
  const myData = await(getPopularCard())

  const cardInfo = myData.find(
    (card:any)=> card.animeId == params.info
  )
  return cardInfo;



}


export default async function Info({params}:any) {
  // const info = await(getPopularData());
  const cardInfo = await(getPopularPath(params))
  const {animeId,animeImg, releasedDate, animeTitle} = cardInfo;
    
  
  return (
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
      
     
  )
}


// export const getStaticPaths = async function () {
//   const res = await fetch("https://gogoanime.consumet.org/popular");
//   const data = await res.json();

//   const paths = data.map((curElem)=> {
//     return {
//       params: {
//         info: curElem.id.toString(),
//       }
//     }
//   })


//   return {
//     paths,
//     fallback:false,
//   }

// }

// export const getStaticProps = async ( context)=> {
//   const id = context.params.info
//   const res = await fetch(`https://gogoanime.consumet.org/popular/${id}`)
//   const data =  res.json();
//   return {
//     props: {
//       data,
//     },
//   }

// }