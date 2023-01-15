import Image from "next/image"
import header from "../style/header.module.scss"
import Link from 'next/link'


export default function Nav() {
  return (
<nav className={header.nav}>
 <div className="image-wrapper">
 <Image className={header.imgrad} src="/logo.png" alt='logo'
  width={50}
  height={50} />
  </div>
 <ul>
     <li><Link href="./">Home</Link></li>
     <li><Link href="/movies">Movies</Link></li>
     <li><Link href="./tvseries">TV Series</Link></li>
     <li><Link href="./mostpopular">Most Popular</Link></li>
     
 </ul>
 <div className={header.login}>
     <button > <Link href='./'> Login/Signup </Link></button>
 </div>
</nav>
  )
}
