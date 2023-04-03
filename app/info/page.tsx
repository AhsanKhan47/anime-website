"use client";
import Link from "next/link";
export default function Info() {
  return (
    <div>
      {/* <h1>About me</h1> */}

      {/* <p>Hi, I'm a student of PIAIC</p> */}
      <section className="w-11/12 h-screen md:w-8/12 flex justify-center items-center my-14 mx-auto ">
        <ul className=" bg-sky-900   rounded-md shadow-md backdrop-blur-md grid grid-cols-2 text-white py-3 px-3 md:py-10 md:px-8 text-xs md:text-lg">
          <li>Name</li>
          <li className="mb-2">Ahsan Khan</li>
          <li>Roll No</li>
          <li className="mb-2">PIAIC197467</li>
          <li>Batch</li>
          <li className="mb-2">Batch 38</li>
          <li>City</li>
          <li className="mb-2">Karachi</li>
          <li>Course</li>
          <li className="underline mb-2 hover:text-slate-200  transition-all">
            <Link href={"https://www.panaverse.co/"} target="_blank">
              Certified Web 3.0 and Metaverse Developer
            </Link>
          </li>
          <li className="mb-2">Email</li>
          <li>
            <Link
              href={`mailto:ahsanraz44@gmail.com`}
              className="underline hover:text-slate-200  transition-all"
            >
              ahsanraz44@gmail.com
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
