import React from "react";
import Link from "next/link";
import Wrapper from "./wrapper";

export default function Footer() {
  return (
    <>
      <Wrapper>
        {" "}
        <div className="w-11/12 mx-auto mt-6 md:mt-20 ">
          <ul className="text-white flex mb-2">
            <li className="hover:text-secondary ">
              <Link href="./">Home</Link>
            </li>
            <li className="mx-4 hover:text-secondary">
              <Link href="./recentepisodes">Recent Episodes</Link>
            </li>
            <li className="hover:text-secondary">
              <Link href="./top-airing"> Top Airing</Link>
            </li>
          </ul>

          <div className="text-white ">
            <h3>
              Copyright ©{" "}
              <Link href={`/info`}>
                <span className="underline">Ahsanime</span>
              </Link>{" "}
              All Rights Reserved{" "}
            </h3>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
