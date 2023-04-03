import React from "react";
import Image from "next/image";

export default function loading() {
  return (
    <div className="grid place-items-center h-screen">
      <Image src="/erenGif.gif" alt="logo" width={150} height={150}></Image>
    </div>
  );
}
