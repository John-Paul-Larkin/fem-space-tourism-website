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
    <main className="h-screen w-screen overflow-hidden bg-destination-mobile bg-cover tablet:bg-destination-tablet desktop:bg-destination-desktop">
      <div className="mx-auto mt-[6rem] h-screen max-w-container-width desktop:mt-[8.5rem]">
        <div
          className="grid-rows-destination 
        
     
        
        gap-5ll
        grid
        
        min-h-[46.375rem]
        text-center"
        >
          <h2 className="font-barlow_condensed text-fs-300 uppercase tracking-ls-4">
            01 Pick your destination
          </h2>

          <div className=" relative mx-6 aspect-square h-[170px] ">
            <Image src={image} alt={`${name}`} fill={true} />
          </div>

          <nav className="flex justify-center bg-lilac font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-black">
            <ul className="flex w-[14.84375rem] justify-between bg-brown">
              <li
                onClick={() => setSelectedDestination(0)}
                className="destination-menu-btn"
              >
                Moon
              </li>
              <li
                onClick={() => setSelectedDestination(1)}
                className="destination-menu-btn"
              >
                Mars
              </li>
              <li
                onClick={() => setSelectedDestination(2)}
                className="destination-menu-btn"
              >
                Europa
              </li>
              <li
                onClick={() => setSelectedDestination(3)}
                className="destination-menu-btn"
              >
                Titan
              </li>
            </ul>
          </nav>

          <h1 className="h-fit font-bellefair text-fs-800 uppercase">{name}</h1>
          <p className="lilac mx-8 text-fs-200 leading-lh-1">{description}</p>
          <div>
            <div className="font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-lilac">
              avg. distance
            </div>
            <div className="font-bellefair text-fs-600 uppercase">
              {distance}
            </div>
          </div>
          <hr className="bottom-10 mx-auto w-[90%]" />
          <div>
            <div className="font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-lilac">
              est. travel time
            </div>
            <div className="font-bellefair text-fs-600 uppercase">{travel}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
