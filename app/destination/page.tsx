"use client";

import Image from "next/image";
import React, { useState } from "react";
import jsonData from "@/public/data/data.json";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Keyboard } from "swiper/modules";

export default function Destination() {
  return (
    <main className="overflow-hidden... h-screen w-screen bg-destination-mobile bg-cover tablet:bg-destination-tablet desktop:bg-destination-desktop">
      <div className="mx-auto w-full pt-[5.4rem] desktop:pt-[8.5rem]">
        <Swiper
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard]}
        >
          <SwiperSlide>
            {({ isActive }) => (
              <DestinationDetails
                destination={0}
                activeDestination={isActive === true ? 0 : null}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <DestinationDetails
                destination={1}
                activeDestination={isActive === true ? 1 : null}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <DestinationDetails
                destination={2}
                activeDestination={isActive === true ? 2 : null}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <DestinationDetails
                destination={3}
                activeDestination={isActive === true ? 3 : null}
              />
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

type Props = {
  activeDestination: number | null;
  destination: number;
};

const DestinationDetails = (props: Props) => {
  const { destination, activeDestination } = props;
  const { destinations } = jsonData;

  const { name, description, travel, distance } = destinations[destination];
  const image = destinations[destination]?.images.webp;

  const swiper = useSwiper();

  return (
    <div className="mx-auto  grid max-w-container-width grid-rows-destinationMobile text-center desktop:mb-[7.375rem] desktop:grid-cols-destinationDesktop desktop:grid-rows-destinationDesktop desktop:text-left">
      <h1 className="font-barlow_condensed text-fs-300 uppercase tracking-ls-4 tablet:ml-[2.4rem] tablet:mt-[2.9rem] tablet:text-left tablet:text-fs-500 tablet:tracking-ls-5 desktop:col-span-2 desktop:m-0 desktop:ml-[11%] desktop:mt-[4.5rem] desktop:text-fs-600 desktop:tracking-ls-6">
        <span className="mr-[1.125rem] font-bold opacity-25">01</span>
        Pick your destination
      </h1>

      <div className="grid desktop:mx-[1rem]">
        <div className="relative mx-auto mb-6 mt-8 aspect-square w-[45%] min-w-[10.625rem] tablet:mb-[3.3125rem] tablet:mt-[3.75rem] tablet:w-[39%] desktop:m-0 desktop:w-[100%] desktop:max-w-[27.8125rem] desktop:self-center desktop:justify-self-center mid-desktop:self-end">
          {image && <Image src={image} alt={`${name}`} fill={true} />}
        </div>
      </div>

      <section className="relative">
        <nav className=" mb-5 h-[1.75rem] font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-lilac tablet:mb-[1.7rem] tablet:h-[2.3rem] tablet:text-fs-300 tablet:tracking-ls-4 desktop:m-0 desktop:mb-[2.3125rem] desktop:mt-16 desktop:text-fs-300 desktop:tracking-ls-4">
          <ul className="mx-auto  flex h-full w-[14.84375rem] items-start justify-between tablet:w-[17.84375rem] desktop:mx-0">
            <li
              className={`destination-menu-btn ${
                activeDestination == 0 ? "after:border-b-[3px]" : ""
              }`}
              onClick={() => swiper.slideTo(0, 500)}
            >
              {destinations[0].name}
            </li>
            <li
              className={`destination-menu-btn ${
                activeDestination == 1 ? "after:border-b-[3px]" : ""
              }`}
              onClick={() => swiper.slideTo(1, 500)}
            >
              {destinations[1].name}
            </li>

            <li
              className={`destination-menu-btn ${
                activeDestination == 2 ? "after:border-b-[3px]" : ""
              }`}
              onClick={() => swiper.slideTo(2, 500)}
            >
              {destinations[2].name}
            </li>
            <li
              className={`destination-menu-btn ${
                activeDestination == 3 ? "after:border-b-[3px]" : ""
              }`}
              onClick={() => swiper.slideTo(3, 500)}
            >
              {destinations[3].name}
            </li>
          </ul>
        </nav>

        <h2 className="font-bellefair text-fs-800 uppercase leading-[1.25em] tablet:text-fs-900 desktop:text-fs-1000">
          {name}
        </h2>

        <div className="relative">
          <p
            className="mx-8 pb-8 text-fs-200 leading-lh-1 text-lilac after:absolute
      after:left-[5%] after:top-0 after:h-full after:w-[90%] after:border-b-[1px] after:border-opaque-border tablet:mx-[6.125rem] tablet:pb-[3.068rem] tablet:text-fs-300 tablet:leading-lh-2
      desktop:m-0 desktop:w-[27.75rem] desktop:text-fs-400 desktop:leading-lh-3 desktop:after:left-0 desktop:after:w-[27.75rem]"
          >
            {description}
          </p>
        </div>

        <section className="tablet:mt-[1.7rem] tablet:flex tablet:items-center tablet:justify-center desktop:justify-start   ">
          <div className=" mb-[1.5rem] mt-[1.9rem] tablet:m-0 tablet:w-[14rem] desktop:mb-0">
            <h3 className=" mb-[.4rem] font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-lilac ">
              avg. distance
            </h3>
            <p className="font-bellefair text-fs-600 uppercase">{distance}</p>
          </div>
          <div className="tablet:m-0 tablet:w-[14rem] desktop:mb-0">
            <h3 className="mb-[.4rem] font-barlow_condensed text-fs-100 uppercase tracking-ls-3 text-lilac">
              est. travel time
            </h3>
            <p className="mb-[3.5625rem] font-bellefair text-fs-600 uppercase tablet:m-0 desktop:m-0">
              {travel}
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};
