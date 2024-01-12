"use client";
import Image from "next/image";

import React, { useState } from "react";
import jsonData from "@/public/data/data.json";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Keyboard } from "swiper/modules";

export default function Crew() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <div className="absolute h-full w-full bg-crew-mobile bg-cover opacity-[35%] tablet:bg-crew-tablet desktop:bg-crew-desktop"></div>

      <Swiper
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard]}
      >
        <SwiperSlide>
          {({ isActive }) => (
            <CrewDetails
              crewMember={0}
              activeIndex={isActive === true ? 0 : null}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <CrewDetails
              crewMember={1}
              activeIndex={isActive === true ? 1 : null}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <CrewDetails
              crewMember={2}
              activeIndex={isActive === true ? 2 : null}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <CrewDetails
              crewMember={3}
              activeIndex={isActive === true ? 3 : null}
            />
          )}
        </SwiperSlide>
      </Swiper>
    </main>
  );
}

type Props = {
  activeIndex: number | null;
  crewMember: number;
};

const CrewDetails = (props: Props) => {
  const { crewMember, activeIndex } = props;

  const { crew } = jsonData;
  const { name, role, bio } = crew[crewMember];
  const image = crew[crewMember]?.images.png;

  const swiper = useSwiper();

  return (
    <div className="relative mx-auto mt-[5.4rem] max-w-container-width text-center desktop:mt-[8.5rem] desktop:text-left">
      <div className="relative grid grid-rows-crewMobile desktop:grid-cols-crewDesktop desktop:grid-rows-crewDesktop">
        <h1
          className="font-barlow_condensed text-fs-300 uppercase tracking-ls-4 text-white tablet:mb-[3.75rem] tablet:ml-[2.4rem] tablet:mt-[2.5rem] tablet:text-left tablet:text-fs-500 tablet:tracking-ls-5
      desktop:order-first desktop:col-span-1 desktop:m-0 desktop:mb-[9.025rem] desktop:ml-[1rem] desktop:mt-[4.55rem] desktop:text-fs-600 desktop:tracking-ls-6 x-lrg-desktop:ml-[10.35rem]"
        >
          <span className="mr-[.9rem] font-bold opacity-25 desktop:mr-[1.3rem] ">
            02
          </span>
          Meet your crew
        </h1>

        <div
          className="relative mt-8 after:absolute after:left-[5%] after:top-0 after:h-full after:w-[90%] after:border-b-[1px] after:border-opaque-border tablet:order-3 tablet:mt-0 tablet:after:hidden
      desktop:row-span-2 desktop:mt-[3.875rem]"
        >
          <div className="relative mx-auto h-[222px] tablet:h-[35.75rem] desktop:h-[44.5rem] ">
            {image && (
              <Image
                src={image}
                alt={`${name}`}
                fill={true}
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom",
                }}
              />
            )}
          </div>
        </div>

        <section className="tablet:grid desktop:order-last desktop:ml-[1rem] desktop:w-[30.5rem] desktop:grid-rows-crewDetails x-lrg-desktop:ml-[10.35rem]">
          <div className="flex h-[4.2rem] items-center justify-center tablet:order-4 tablet:pt-[1rem] desktop:justify-start">
            <ul className="flex h-6 w-[5.6rem] cursor-pointer items-center justify-between desktop:h-10 desktop:w-[8rem] ">
              <li
                className={`h-[.625rem] w-[.625rem] rounded-full hover:bg-hover-circle desktop:h-[.94rem] desktop:w-[.94rem] ${
                  activeIndex == 0 ? "bg-white" : "bg-opaque-border"
                }`}
                onClick={() => swiper.slideTo(0, 500)}
              ></li>
              <li
                className={`h-[.625rem] w-[.625rem] rounded-full hover:bg-hover-circle desktop:h-[.94rem] desktop:w-[.94rem] ${
                  activeIndex == 1 ? "bg-white" : "bg-opaque-border"
                }`}
                onClick={() => swiper.slideTo(1, 500)}
              ></li>
              <li
                className={`h-[.625rem] w-[.625rem] rounded-full hover:bg-hover-circle desktop:h-[.94rem] desktop:w-[.94rem] ${
                  activeIndex == 2 ? "bg-white" : "bg-opaque-border"
                }`}
                onClick={() => swiper.slideTo(2, 500)}
              ></li>
              <li
                className={`h-[.625rem] w-[.625rem] rounded-full hover:bg-hover-circle desktop:h-[.94rem] desktop:w-[.94rem] ${
                  activeIndex == 3 ? "bg-white" : "bg-opaque-border"
                }`}
                onClick={() => swiper.slideTo(3, 500)}
              ></li>
            </ul>
          </div>

          <div className="tablet:order-4 desktop:mb-[5.2rem]"></div>

          <h2 className="font-bellefair text-fs-300 uppercase text-white text-opacity-[.4951] tablet:text-fs-550 desktop:text-fs-700 ">
            {role}
          </h2>

          <h3 className="mb-4 font-bellefair text-fs-550 uppercase text-white tablet:mb-0 tablet:text-fs-750 desktop:m-0 desktop:mb-4 desktop:text-fs-800">
            {name}
          </h3>
          <p className=" mx-6 mt-4 text-fs-200 leading-lh-1 text-lilac tablet:mx-auto tablet:mt-2 tablet:w-[28.625rem] tablet:text-fs-300 tablet:leading-7 desktop:m-0 desktop:w-[27.75rem] desktop:text-fs-400 desktop:leading-lh-3">
            {bio}
          </p>
        </section>
      </div>
    </div>
  );
};
