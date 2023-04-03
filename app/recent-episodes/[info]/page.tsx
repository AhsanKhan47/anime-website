import React from "react";
import Wrapper from "../../components/wrapper";
async function getAnimeDetails(id: string) {
  const res = await fetch(
    `https://api.consumet.org/anime/gogoanime/info/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}
export default async function page({ params }: any) {
  const details = await getAnimeDetails(params.info);
  const {
    title,
    image,
    releaseDate,
    totalEpisodes,
    description,
    type,
    status,
  } = details;
  return (
    <>
      <Wrapper>
        <section className="w-10/12 m-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mt-6 md:mt-20 ">
          <img
            src={image}
            alt={title}
            className="w-full sm:w-1/2 md:w-full  "
          />
          <div className=" mr-auto col-span-2 text-white md:font-semibold ">
            <h1 className="text-white text-2xl md:text-5xl md:font-bold md:mb-4">
              {title}
            </h1>
            <p>
              <span className="text-secondary">Episodes : </span>
              {totalEpisodes}
            </p>
            <p className="my-1">
              <span className="text-secondary">Released Date : </span>
              {releaseDate}
            </p>
            <p>
              <span className="text-secondary">Type : </span>
              {type}
            </p>
            <p className="my-1">
              <span className="text-secondary">Status : </span>
              {status}
            </p>

            <p className="text-white text-xs sm:text-base md:text-lg md:leading-8">
              <span className="text-secondary ">Description : </span>
              {description}
            </p>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
