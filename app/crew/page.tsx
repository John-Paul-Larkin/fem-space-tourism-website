"use client";

import React, { useState } from "react";
import jsonData from "@/public/data/data.json";
import Image from "next/image";

export default function Crew() {
  const { crew } = jsonData;
  const [selectedCrewMember, setSelectedCrewMember] = useState(crew[0]);

  const { name, role, bio } = selectedCrewMember;
  const image = selectedCrewMember?.images.png;

  const handleClickCreMember = (clickedDestination: string) => {
    const crewMember = crew.find(
      (crewMember) => crewMember.name === clickedDestination,
    );
    crewMember && setSelectedCrewMember(crewMember);
  };

  return (
    <main className="bg-lilac... relative h-screen w-screen overflow-hidden">
      <div className="absolute h-full w-full bg-crew-mobile bg-cover opacity-[35%] tablet:bg-crew-tablet desktop:bg-crew-desktop"></div>

      <div className="h-screen...  relative  mx-auto mt-[5.4rem] max-w-container-width text-center desktop:mt-[8.5rem] desktop:text-left">
        <div className="grid-rows-crewMobile desktop:grid-rows-crewDesktop desktop:grid-cols-crewDesktop relative grid">
          <h1
            className=" font-barlow_condensed text-fs-300 uppercase tracking-ls-4 text-white tablet:mb-[3.75rem] tablet:ml-[2.4rem] tablet:mt-[2.5rem] tablet:text-left tablet:text-fs-500 tablet:tracking-ls-5
            desktop:order-first desktop:col-span-1 desktop:m-0 desktop:mb-[9.025rem] desktop:ml-[1rem] desktop:mt-[4.55rem] desktop:text-fs-600 desktop:tracking-ls-6 x-lrg-desktop:ml-[10.35rem]"
          >
            <span className="mr-[.9rem] font-bold opacity-25 desktop:mr-[1.3rem] ">
              02
            </span>
            Meet your crew
          </h1>

          <div
            className="after:border-opaque-border relative mt-8 after:absolute after:left-[5%] after:top-0 after:h-full after:w-[90%] after:border-b-[1px] tablet:order-3 tablet:mt-0 tablet:after:hidden
          desktop:row-span-2 desktop:mt-[3.875rem]
          "
          >
            <div
              className="relative mx-auto h-[222px] tablet:h-[35.75rem] desktop:h-[44.5rem]
          "
            >
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

          <section className="bg-white... desktop:h-[26.5rem]... desktop:grid-rows-crewDetails tablet:grid desktop:order-last desktop:ml-[1rem] desktop:w-[30.5rem] x-lrg-desktop:ml-[10.35rem]">
            <div className="tablet:order-4 desktop:mb-[5.2rem]">
              <nav className=" flex h-[4.2rem] items-center justify-center pt-[1rem] desktop:justify-start">
                <ul className="justify-betwee flex h-6 w-[6.13rem] desktop:h-10 desktop:w-[10rem]  ">
                  <CrewMemberMenu
                    name={name}
                    handleClickCrewMember={handleClickCreMember}
                    menuItem="Douglas Hurley"
                  />
                  <CrewMemberMenu
                    name={name}
                    handleClickCrewMember={handleClickCreMember}
                    menuItem="Mark Shuttleworth"
                  />
                  <CrewMemberMenu
                    name={name}
                    handleClickCrewMember={handleClickCreMember}
                    menuItem="Victor Glover"
                  />
                  <CrewMemberMenu
                    name={name}
                    handleClickCrewMember={handleClickCreMember}
                    menuItem="Anousheh Ansari"
                  />
                </ul>
              </nav>
            </div>

            <h2 className="tablet:text-fs-550 font-bellefair text-fs-300 uppercase text-white text-opacity-[.4951] desktop:text-fs-700 ">
              {role}
            </h2>

            <h3 className="text-fs-550 tablet:text-fs-750 mb-4 font-bellefair uppercase text-white tablet:mb-0 desktop:m-0 desktop:mb-4 desktop:text-fs-800">
              {name}
            </h3>
            <p className=" mx-6 mt-4 text-fs-200 leading-lh-1 text-lilac tablet:mx-auto tablet:mt-2 tablet:w-[28.625rem] tablet:text-fs-300 tablet:leading-7 desktop:m-0 desktop:w-[27.75rem] desktop:text-fs-400 desktop:leading-lh-3">
              {bio}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

type Props = {
  name: string | undefined;
  menuItem: string;
  handleClickCrewMember: (clickedCrewmember: string) => void;
};

const CrewMemberMenu = (props: Props) => {
  const { name, handleClickCrewMember, menuItem } = props;

  return (
    <li
      onClick={() => handleClickCrewMember(menuItem)}
      className="flex h-full w-full cursor-pointer items-center justify-between"
    >
      <div
        className={`h-[.625rem] w-[.625rem] rounded-full desktop:h-[.94rem] desktop:w-[.94rem]  ${
          name == menuItem ? "bg-white" : "bg-opaque-border"
        }`}
      ></div>
    </li>
  );
};
