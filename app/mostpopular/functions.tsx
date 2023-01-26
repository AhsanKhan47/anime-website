import React from "react";
// Fetch card details for for dynamic route
export async function getAnimeDetails(id: string) {
  const res = await fetch(
    `https://gogoanime.consumet.org/anime-details/${id}`,
    {
      cache: "force-cache",
    }
  );
  return res.json();
}

export async function getPopularPath(params: any) {
  const myData = await getPopularCard();

  const cardInfo = myData.find((card: any) => card.animeId == params.info);
  return cardInfo;
}
export async function getPopularCard() {
  const data = await fetch("https://gogoanime.consumet.org/popular", {
    cache: "force-cache",
  });
  const myData = data.json();
  return myData;
}

export default function functions() {
  return <div>functions</div>;
}
