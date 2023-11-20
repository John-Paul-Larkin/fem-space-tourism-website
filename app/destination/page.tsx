"use client";

import Image from "next/image";
import React, { useState } from "react";
import { destinations } from "@/public/data/data.json";

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(0);

  const name = destinations[selectedDestination].name;
  const description = destinations[selectedDestination].description;
  const travel = destinations[selectedDestination].travel;
  const distance = destinations[selectedDestination].distance;
  const image = destinations[selectedDestination].images.png;

  return (
    <main className="h-screen w-screen bg-destination-mobile bg-cover tablet:bg-destination-tablet desktop:bg-destination-desktop">
      <div className=" mx-auto max-w-container-width bg-yelow ">
        {name}
        <div className="relative h-80 w-80  ">
          <Image src={image} alt={`${name}`} fill={true} />
        </div>
        {image}
      </div>
    </main>
  );
}
