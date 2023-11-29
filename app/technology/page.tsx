"use client";

import React, { useState } from "react";
import Image from "next/image";
import jsonData from "@/public/data/data.json";
import useIsScreenDesktop from "@/hooks/useIsScreenDesktop";

// import imageLandscape from "@/public/technology/image-launch-vehicle-landscape.jpg";

export default function Technology() {
  const { technology: technologies } = jsonData;
  const [selectedTechnology, setSelectedTechnology] = useState(technologies[0]);

  const { name, description } = selectedTechnology;
  // const imageLandscape =  import(selectedTechnology.images.landscape)
  const imagePortrait = selectedTechnology?.images.portrait;
  const imageLandscape = selectedTechnology?.images.landscape;

  const handleClickTechnology = (clickedTechnology: string) => {
    const technology = technologies.find(
      (technology) => technology.name === clickedTechnology,
    );
    technology && setSelectedTechnology(technology);
  };

  const isDesktop = useIsScreenDesktop();

  return (
    <main className="bg-lilac... relative h-screen w-screen overflow-hidden ">
      <div className="opacity-[35%]... absolute h-full w-full bg-technology-mobile bg-cover tablet:bg-technology-tablet desktop:bg-technology-desktop"></div>

      <div className="mx-auto mt-[5.4rem] max-w-container-width text-center desktop:mt-[8.5rem] desktop:text-left">
        <div className="grid-rows-technologyMobile desktop:grid-rows-technologyDesktop... desktop:grid-cols-technologyDesktop... relative grid">
          <h1
            className=" mb-[1.8rem] mt-[0rem] font-barlow_condensed text-fs-300 uppercase tracking-ls-4 tablet:text-left 
          tablet:text-fs-500 tablet:tracking-ls-5 desktop:col-span-2 desktop:text-fs-600 desktop:tracking-ls-6"
          >
            <span className="mr-[.8rem] font-bold opacity-25">03</span>
            Space launch 101
          </h1>

          <div className="w-fit... relative aspect-[768/310] h-[10.625rem] w-full overflow-hidden   bg-white">
            {imageLandscape && !isDesktop && (
              <Image
                src={imageLandscape}
                alt={`${name}`}
                quality={100}
                fill={true}
                style={{
                  //   overflow: "hidden",
                  //   height: "170px",
                  objectFit: "cover",
                }}
              />
            )}
            {imageLandscape && isDesktop && (
              <Image
                src={imageLandscape}
                alt={`${name}`}
                fill={true}
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom",
                }}
              />
            )}
          </div>

          <div className="mb-[1.5rem] mt-[2.1rem] flex items-center justify-center">
            <nav className="h-[2.5rem] w-[9.5rem] ">
              <ul className=" flex flex-row items-center justify-between ">
                <TechnologyMenu
                  name={name}
                  menuNumber={1}
                  handleClickTechnology={handleClickTechnology}
                  menuItem="Launch vehicle"
                />
                <TechnologyMenu
                  name={name}
                  menuNumber={2}
                  handleClickTechnology={handleClickTechnology}
                  menuItem="Spaceport"
                />
                <TechnologyMenu
                  name={name}
                  menuNumber={3}
                  handleClickTechnology={handleClickTechnology}
                  menuItem="Space capsule"
                />
              </ul>
            </nav>
          </div>
          <h2 className="mb-[.2rem] font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-lilac">
            The terminology...
          </h2>

          <div className="text-fs-550 font-bellefair uppercase ">{name}</div>
          <div className="mx-auto mt-[1rem] w-[20.44rem] text-fs-200 leading-lh-1 text-lilac ">
            {description}
          </div>
        </div>
      </div>
    </main>
  );
}

type Props = {
  name: string | undefined;
  menuItem: string;
  handleClickTechnology: (clickedTechnology: string) => void;
  menuNumber: number;
};

const TechnologyMenu = (props: Props) => {
  const { name, handleClickTechnology, menuItem, menuNumber } = props;

  return (
    <li
      onClick={() => handleClickTechnology(menuItem)}
      // className="flex h-full w-full cursor-pointer items-center justify-between"
    >
      <div
        className={`
          hover:bg-hover-circle border-opaque-border flex
           h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border-[1px] ${
             name == menuItem ? "bg-white text-black" : "bg-black"
           }`}
      >
        <span className="relative left-[1px] font-bellefair text-fs-300 tracking-[1px]">
          {menuNumber}
        </span>
      </div>
    </li>
  );
};
