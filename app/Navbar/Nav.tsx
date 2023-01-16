import Image from "next/image"
import header from "../style/header.module.scss"
import Link from 'next/link'
import NavLinks from "../navlinks/nav-links"

export default function Nav() {
  // console.log("renderinggg");

  return (
    <nav className={header.nav}>
      <div className="image-wrapper">
        <Image className={header.imgrad} src="/logo.png" alt='logo'
          width={50}
          height={50} />
      </div>
      <ul>
        <li><NavLinks href="./">Home</NavLinks></li>
        <li><NavLinks href="/movies">Movies</NavLinks></li>
        <li><NavLinks href="/tvseries">TV Series</NavLinks></li>
        <li><NavLinks href="/mostpopular">Most Popular</NavLinks></li>

      </ul>
      <div className={header.login}>
        <button > <Link href='./'> Login/Signup </Link></button>
      </div>
    </nav>
  )
}
