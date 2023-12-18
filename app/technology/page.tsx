"use client";

import React, { useState } from "react";
import Image from "next/image";
import jsonData from "@/public/data/data.json";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function Technology() {
  return (
    <main className="bg-lilac... relative h-svh w-screen overflow-hidden ">
      <div className="opacity-[35%]... absolute h-full w-full bg-technology-mobile bg-cover tablet:bg-technology-tablet desktop:bg-technology-desktop"></div>

      <Swiper>
        <SwiperSlide>
          {({ isActive }) => (
            <TechnologyDetails
              technology={0}
              activeTechnology={isActive === true ? 0 : null}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <TechnologyDetails
              technology={1}
              activeTechnology={isActive === true ? 1 : null}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <TechnologyDetails
              technology={2}
              activeTechnology={isActive === true ? 2 : null}
            />
          )}
        </SwiperSlide>
      </Swiper>
    </main>
  );
}

type Props = {
  technology: number;
  activeTechnology: number | null;
};

const TechnologyDetails = (props: Props) => {
  const { technology: technologies } = jsonData;
  const { technology, activeTechnology } = props;
  const { name, description } = technologies[technology];
  const imagePortrait = technologies[technology]?.images.portrait;
  const imageLandscape = technologies[technology]?.images.landscape;

  const swiper = useSwiper();

  return (
    <div className="mx-auto mt-[5.4rem] max-w-container-width text-center desktop:mt-[8.5rem] desktop:text-left">
      <div className="relative grid grid-rows-technologyMobile desktop:grid-cols-technologyDesktop desktop:grid-rows-technologyDesktop">
        <h1
          className=" mb-[1.8rem] font-barlow_condensed text-fs-300 uppercase tracking-ls-4 tablet:mb-[3.7rem] tablet:ml-[2.4rem] tablet:mt-[2.8rem] tablet:text-left
    tablet:text-fs-500 tablet:tracking-ls-5 desktop:col-span-2 desktop:ml-[10.4rem] desktop:mt-[4.3rem] desktop:text-fs-600 desktop:tracking-ls-6"
        >
          <span className="mr-[.8rem] font-bold opacity-25 desktop:mr-[1.2rem]">
            03
          </span>
          Space launch 101
        </h1>

        <div className="w-fit...  relative aspect-[768/310] h-[10.625rem] w-full overflow-hidden bg-white tablet:mx-auto tablet:h-[19rem]  tablet:max-w-[34rem] desktop:col-start-3 desktop:row-start-2 desktop:ml-[2rem] desktop:aspect-[515/527] desktop:h-[32.9375rem] desktop:max-w-max">
          <Image
            src={imageLandscape}
            alt={`${name}`}
            quality={100}
            fill={true}
            className="object-cover tablet:hidden"
          />

          <Image
            src={imagePortrait}
            alt={`${name}`}
            fill={true}
            className="hidden object-cover tablet:block "
          />
        </div>

        <div
          className="mb-[1.5rem]  mt-[2.1rem] flex items-center justify-center tablet:mb-[2.8rem] tablet:mt-[3.7rem]
     desktop:col-start-1 desktop:m-0 desktop:mx-[2rem] desktop:mt-[5rem] desktop:block xx-lrg-desktop:ml-[10.4rem] xx-lrg-desktop:mr-[4.3rem]"
        >
          <nav className="h-[2.5rem] w-[9.5rem] tablet:h-[3.75rem] tablet:w-[13.125rem] desktop:h-[19rem] desktop:w-auto x-lrg-desktop:w-[5rem]">
            <ul className=" flex items-center justify-between desktop:h-full desktop:flex-col">
              <li onClick={() => swiper.slideTo(0, 500)}>
                <div
                  className={`
          flex h-[2.5rem] w-[2.5rem] cursor-pointer
           items-center justify-center rounded-full border-[1px] border-opaque-border hover:bg-hover-circle tablet:h-[3.75rem] tablet:w-[3.75rem] desktop:h-[5rem] desktop:w-[5rem] ${
             activeTechnology == 0 ? "bg-white text-black" : "bg-black"
           }`}
                >
                  <span className="relative left-[1px] font-bellefair text-fs-300 tracking-[1px] tablet:text-fs-550 tablet:tracking-[1.5px]">
                    {1}
                  </span>
                </div>
              </li>

              <li onClick={() => swiper.slideTo(1, 500)}>
                <div
                  className={`flex h-[2.5rem] w-[2.5rem] cursor-pointer
              items-center justify-center rounded-full border-[1px] border-opaque-border hover:bg-hover-circle tablet:h-[3.75rem] tablet:w-[3.75rem] desktop:h-[5rem] desktop:w-[5rem] ${
                activeTechnology == 1 ? "bg-white text-black" : "bg-black"
              }`}
                >
                  <span className="relative left-[1px] font-bellefair text-fs-300 tracking-[1px] tablet:text-fs-550 tablet:tracking-[1.5px]">
                    {2}
                  </span>
                </div>
              </li>

              <li
                onClick={() => swiper.slideTo(2, 500)}

                // className="flex h-full w-full cursor-pointer items-center justify-between"
              >
                <div
                  className={`flex h-[2.5rem] w-[2.5rem] cursor-pointer
           items-center justify-center rounded-full border-[1px] border-opaque-border hover:bg-hover-circle tablet:h-[3.75rem] tablet:w-[3.75rem] desktop:h-[5rem] desktop:w-[5rem] ${
             activeTechnology == 2 ? "bg-white text-black" : "bg-black"
           }`}
                >
                  <span className="relative left-[1px] font-bellefair text-fs-300 tracking-[1px] tablet:text-fs-550 tablet:tracking-[1.5px]">
                    {3}
                  </span>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="desktop:col-start-2 desktop:row-start-2 desktop:mt-[5rem]">
          <h2 className="mb-[.2rem] font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-lilac tablet:text-fs-300 tablet:tracking-ls-4 desktop:text-fs-300 desktop:tracking-ls-4">
            The terminology...
          </h2>

          <div className="font-bellefair text-fs-550 uppercase tablet:text-fs-750 desktop:text-fs-800">
            {name}
          </div>
          <div className="mx-auto mt-[1rem] w-[20.44rem] text-fs-200 leading-lh-1 text-lilac tablet:mt-[.6rem] tablet:w-[28.625rem] tablet:text-fs-300 tablet:leading-lh-2 desktop:mx-0 desktop:w-auto desktop:text-fs-400 desktop:leading-lh-3">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
