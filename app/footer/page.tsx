import React from "react";
import Link from "next/link";
import footer from "../style/footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={footer.main}>
        <ul>
          <li>
            <Link href="./movies">Home</Link>
          </li>
          <li>
            <Link href="./movies">Movies</Link>
          </li>
          <li>
            <Link href="./tvseries">TV Series</Link>
          </li>
          <li>
            <Link href="./mostpopular">Most Popular</Link>
          </li>
        </ul>

        <div className={footer.info}>
          <h3>
            Copyright ©{" "}
            <Link href={`/info`}>
              <span className={footer.underline}>Ahsanime</span>
            </Link>{" "}
            All Rights Reserved{" "}
          </h3>
        </div>
      </div>
    </>
  );
}
