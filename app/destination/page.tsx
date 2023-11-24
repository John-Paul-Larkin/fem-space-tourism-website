"use client";

import Image from "next/image";
import React, { useState } from "react";
import { destinations } from "@/public/data/data.json";

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(
    destinations.find((destination) => destination.name === "Moon"),
  );

  const name = selectedDestination?.name;
  const description = selectedDestination?.description;
  const travel = selectedDestination?.travel;
  const distance = selectedDestination?.distance;

  const image = selectedDestination?.images.webp;

  const handleClickDestination = (clickedDestination: string) => {
    const destinationInfo = destinations.find(
      (destination) => destination.name === clickedDestination,
    );

    setSelectedDestination(destinationInfo);
  };

  return (
    <main className="h-screen w-screen overflow-hidden bg-destination-mobile bg-cover tablet:bg-destination-tablet desktop:bg-destination-desktop">
      <div className="mx-auto mt-[5.4rem] h-screen max-w-container-width desktop:mt-[8.5rem]">
        <div
          className="grid-rows-destination 
      
        gap-5ll
        grid
        
        min-h-[46.85rem]
        text-center"
        >
          <h2 className="font-barlow_condensed text-fs-300 uppercase tracking-ls-4
          tablet:mt-10 tablet:text-fs-500 tablet:tracking-ls-5 tablet:text-left tablet:ml-[2.4rem]
          ">
            <span className="mr-[1.125rem] font-bold opacity-25">01</span>
            Pick your destination
          </h2>
          <div className="mb-6 mt-8 grid items-center justify-center">
            <div className=" relative  aspect-square h-[170px] ">
              {image && <Image src={image} alt={`${name}`} fill={true} />}
            </div>
          </div>



          

          <nav className="mx-auto mb-5 h-[1.75rem] font-barlow_condensed text-fs-100 uppercase text-lilac tracking-ls-3
          tablet:text-fs-300 tablet:tracking-ls-4 tablet:h-[2.15rem]
          ">
            <ul className="flex  h-full w-[14.84375rem] items-start justify-between tablet:w-[17.84375rem]">
              <li
                onClick={() => handleClickDestination("Moon")}
                className="destination-menu-btn"
              >
                Moon
              </li>
              <li
                onClick={() => handleClickDestination("Mars")}
                className="destination-menu-btn"
              >
                Mars
              </li>
              <li
                onClick={() => handleClickDestination("Europa")}
                className="destination-menu-btn"
              >
                Europa
              </li>
              <li
                onClick={() => handleClickDestination("Titan")}
                className="destination-menu-btn"
              >
                Titan
              </li>
            </ul>
          </nav>

          <h1 className="font-bellefair text-fs-800 uppercase leading-[1.2em] tablet:text-fs-900 ">
            {name}
          </h1>

          <p className="lilac mx-8 mb-8 text-fs-200 leading-lh-1 text-lilac tablet:text-fs-300 tablet:leading-lh-2 tablet:mx-[6.125rem] tablet:mb-12">
            {description}
          </p>




          <section className="">
            <hr className="bottom-10 mx-auto w-[90%] opacity-20" />

            <div className="mb-8 mt-8">
              <h3 className=" mb-[.4rem] font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-lilac">
                avg. distance
              </h3>
              <p className="font-bellefair text-fs-600 uppercase">{distance}</p>
            </div>

            <div>
              <h3 className="mb-2 font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-lilac">
                est. travel time
              </h3>
              <p className="mb-[3.5625rem] font-bellefair text-fs-600 uppercase">
                {travel}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
