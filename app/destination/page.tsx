"use client";

import Image from "next/image";
import React, { useState } from "react";
import { destinations } from "@/public/data/data.json";

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0],
  );
  // destinations.find((destination) => destination.name === "Moon"),

  const name = selectedDestination?.name;
  const description = selectedDestination?.description;
  const travel = selectedDestination?.travel;
  const distance = selectedDestination?.distance;

  const image = selectedDestination?.images.webp;

  const handleClickDestination = (clickedDestination: string) => {
    const destinationInfo = destinations.find(
      (destination) => destination.name === clickedDestination,
    );

    destinationInfo && setSelectedDestination(destinationInfo);
  };

  return (
    <main className="h-screen w-screen overflow-hidden bg-destination-mobile bg-cover tablet:bg-destination-tablet desktop:bg-destination-desktop">
      <div className="mx-auto mt-[5.4rem] h-screen max-w-container-width desktop:mt-[8.5rem]">
        <div
          className="grid-rows-destinationMobile bg-brown--- desktop:grid-rows-destinationDesktop desktop:grid-cols-destinationDesktop
          
          bg-yellow.. grid text-center 
desktop:mb-[7.375rem]
desktop:text-left
          "
        >
          <h1
            className=" font-barlow_condensed text-fs-300
          uppercase tracking-ls-4 tablet:ml-[2.4rem] tablet:mt-10 tablet:text-left
          tablet:text-fs-500 tablet:tracking-ls-5


            desktop:col-span-2

          desktop:m-0
          desktop:mt-20
          desktop:text-fs-600
          desktop:tracking-ls-6
          "
          >
            <span className="mr-[1.125rem] font-bold opacity-25">01</span>
            Pick your destination
          </h1>

          <div
            className="bg-green... relative mx-auto mb-6 mt-8 aspect-square w-[45%] min-w-[10.625rem] tablet:mb-[3.3125rem] tablet:mt-[3.75rem]

            
            tablet:w-[39%]

            desktop:col-start-1
          desktop:row-span-2
            desktop:m-0
            desktop:mr-[5rem]

            desktop:mt-[6.0625rem]
            desktop:w-[70%] desktop:self-end
            desktop:justify-self-end

            "
          >
            {image && <Image src={image} alt={`${name}`} fill={true} />}
          </div>

          <section
            className=" before:border-opaque-border relative  before:absolute before:left-[5%] before:h-full before:w-[90%] before:border-b-[1px] 
            desktop:ml-[5rem]
            desktop:before:left-0 
            desktop:before:w-[27.75rem]          
          "
          >
            <nav
              className=" mb-5 h-[1.75rem] font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-lilac
          tablet:mb-8 tablet:h-[2.3rem] tablet:text-fs-300 
          tablet:tracking-ls-4

          desktop:m-0 desktop:mb-[2.3125rem]

          desktop:mt-16
          desktop:text-fs-300
        desktop:tracking-ls-4
          "
            >
              <ul className="mx-auto  flex h-full w-[14.84375rem] items-start justify-between tablet:w-[17.84375rem] desktop:mx-0">
                <DestinationMenu
                  name={name}
                  handleClickDestination={handleClickDestination}
                  menuItem="Moon"
                />

                <DestinationMenu
                  name={name}
                  handleClickDestination={handleClickDestination}
                  menuItem="Mars"
                />

                <DestinationMenu
                  name={name}
                  handleClickDestination={handleClickDestination}
                  menuItem="Europa"
                />
                <DestinationMenu
                  name={name}
                  handleClickDestination={handleClickDestination}
                  menuItem="Titan"
                />
              </ul>
            </nav>

            <h2
              className="font-bellefair text-fs-800 uppercase leading-[1.2em] tablet:text-fs-900 
            
          desktop:text-fs-1000
            
            "
            >
              {name}
            </h2>

            <p
              className="lilac mx-8 mb-8 text-fs-200 leading-lh-1 text-lilac tablet:mx-[6.125rem] tablet:mb-[3.1rem] tablet:text-fs-300 tablet:leading-lh-2
            desktop:m-0
    desktop:mb-[3.375rem]
          desktop:w-[27.75rem] desktop:text-fs-400
          desktop:leading-lh-3

            "
            >
              {description}
            </p>
          </section>

          <section className="tablet:mt-[1.8rem] tablet:flex tablet:justify-center desktop:ml-[5rem] desktop:self-end desktop:justify-self-start ">
            <div className="mb-8 mt-8 tablet:m-0 tablet:w-[14rem] desktop:mb-0">
              <h3 className=" mb-[.4rem] font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-lilac ">
                avg. distance
              </h3>
              <p className="font-bellefair text-fs-600 uppercase">{distance}</p>
            </div>

            <div className="tablet:w-[14rem] desktop:mb-0">
              <h3 className="mb-2 font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-lilac">
                est. travel time
              </h3>
              <p className="mb-[3.5625rem] font-bellefair text-fs-600 uppercase desktop:m-0">
                {travel}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

type Props = {
  name: string | undefined;
  menuItem: string;
  handleClickDestination: (clickedDestination: string) => void;
};

const DestinationMenu = (props: Props) => {
  const { name, handleClickDestination, menuItem } = props;

  return (
    <li
      onClick={() => handleClickDestination(menuItem)}
      className={`destination-menu-btn ${
        name == menuItem ? "after:tablet:border-b-[3px]" : ""
      }`}
    >
      {menuItem}
    </li>
  );
};
