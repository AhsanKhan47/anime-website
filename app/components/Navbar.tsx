import Image from "next/image";
import Link from "next/link";
import NavLinks from "../navlinks/nav-links";
import Wrapper from "./wrapper";

export default function Nav() {
  // console.log("renderinggg");

  return (
    <>
      <Wrapper>
        <nav className="w-11/12 mx-auto my-2 flex flex-row sm:items-center   items-center justify-between">
          <div className="">
            <Link href={`/info`}>
              <Image
                className="rounded-full"
                src="/logo1.jpg"
                alt="logo"
                width={60}
                height={60}
              />
            </Link>
          </div>

          <div>
            <div>
              <ul className="flex mx-auto my-3  text-white text-xs md:text-lg">
                <li className="mx-1 sm:mx-3 hover:text-secondary transition-all font-normal">
                  <NavLinks href="/">Home</NavLinks>
                </li>
                <li className="mx-1 sm:mx-3 hover:text-secondary transition-all font-normal">
                  <NavLinks href="/recentepisodes">Recent Episodes</NavLinks>
                </li>
                <li className="mx-1 sm:mx-3 hover:text-secondary transition-all font-normal">
                  <NavLinks href="/top-airing">Top Airing</NavLinks>
                </li>
                <li className="mx-1 sm:mx-3 hover:text-secondary transition-all font-normal hidden md:visible">
                  <NavLinks href="/info">About Dev</NavLinks>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className={header.hamburger}>
 <a onClick={()=> setNav(!showNav)} href="#">
 <GiHamburgerMenu />
 </a>
</div> */}
        </nav>
      </Wrapper>
    </>
  );
}
