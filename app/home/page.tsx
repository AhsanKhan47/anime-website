import style from "../style/home.module.scss"
import Link from 'next/link';
import Image from "next/image"


export default function home() {
    // creating a list of genre in an array. each value in list will be used as dynamic route segment/path
    let genre = [
        "action",
        "adventure",
        "comedy",
        "shounen",
        "demons",
        "drama",
        "fantasy",
        "horror",
        "shounen-ai",
        "supernatural",
        "kids",]
    return (
        <>
            <h1 className={style.textCenter}>Genres</h1>
            <ul className={style.main}>
                {
                    genre.map(              
                        (genreType) => (

                            <Link href={`/home/${genreType}`}>
                                {/* <Image className={style.loader} src="/erenGif.gif" alt='logo'
                                    width={150}
                                    height={150}></Image> */}
                                    
                                <li >{genreType}</li>
                            </Link>

                        )
                    )
                }
            </ul>
          
          
        </>
    )
}
