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

      <div className="h-screen...  relative  mx-auto mt-[5.4rem] max-w-container-width text-center desktop:mt-[8.5rem]">
        <div className="grid-rows-crewMobile relative grid">
          <h1
            className=" font-barlow_condensed text-fs-300 uppercase tracking-ls-4 text-white tablet:text-left tablet:mt-[2.5rem] tablet:mb-[3.75rem] tablet:ml-[2.4rem]
            tablet:text-fs-500 tablet:tracking-ls-5 desktop:text-fs-600 desktop:tracking-ls-6"
          >
            <span className="mr-[.9rem] font-bold opacity-25 ">02</span>
            Meet your crew
          </h1>

          <div className="tablet:order-3 tablet:after:hidden after:border-opaque-border relative mt-8 after:absolute after:left-[5%] after:top-0 after:h-full after:w-[90%] after:border-b-[1px]">
            <div
              className="relative mx-auto h-[222px] 
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

          <section className="tablet:grid">
            <div className="tablet:order-4">
              <nav className=" flex h-[4.2rem] items-center justify-center pt-[1rem]">
                <ul className="flex w-[6.13rem] h-6 justify-between ">
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

            <h2 className="font-bellefair text-fs-300 uppercase text-white text-opacity-[.4951] tablet:text-fs-550" >
              {role}
            </h2>
            <h3 className="mb-4 font-bellefair text-fs-550 uppercase text-white tablet:text-fs-750">
              {name}
            </h3>
            <p className="mx-6 mt-4 text-fs-200 leading-lh-1 text-lilac tablet:w-[33.5rem] tablet:mx-auto tablet:text-fs-300 tablet:leading-7">
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
    <li onClick={() => handleClickCrewMember(menuItem)}
    className="w-full h-full cursor-pointer"
    >
      <div
        className={`h-[.625rem] w-[.625rem] rounded-full  ${
          name == menuItem ? "bg-white" : "bg-opaque-border"
        }`}
      ></div>
    </li>
  );
};
